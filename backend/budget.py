from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import matplotlib.pyplot as plt
from user_login import user_bp

app = Flask("PiggyBank")
app.register_blueprint(user_bp)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb+srv://piggy:piggy@codeblooded.1n8xcmo.mongodb.net/')
db = client['budget']
collection = db['user_data']

# API endpoint to calculate recommended budget and save user input
@app.route('/api/budget', methods=['POST'])
def calculate_budget():
    data = request.get_json()

    # Assuming data format: {'monthly_income': 1000}
    monthly_income = data.get('monthly_income', 0)

    # Calculate 50/30/20 split
    needs = 0.5 * monthly_income
    wants = 0.3 * monthly_income
    savings = 0.2 * monthly_income

    # Save user input to MongoDB
    collection.insert_one({
        'monthly_income': monthly_income,
        'recommended_budget': {'needs': needs, 'wants': wants, 'savings': savings},
        'actual_spendings': []
    })

    return jsonify({'needs': needs, 'wants': wants, 'savings': savings})

# API endpoint to update actual spendings
@app.route('/api/spendings', methods=['POST'])
def update_spendings():
    data = request.get_json()

    # Assuming data format: {'user_id': 'user123', 'needs': 300, 'wants': 200, 'savings': 100}
    user_id = data.get('user_id')
    needs = data.get('needs', 0)
    wants = data.get('wants', 0)
    savings = data.get('savings', 0)

    # Update actual spendings in MongoDB
    collection.update_one({'_id': user_id}, {'$push': {'actual_spendings': {'needs': needs, 'wants': wants, 'savings': savings}}})

    return jsonify({'message': 'Spendings updated successfully'})

# API endpoint to get historical data for graph
@app.route('/api/graph/<user_id>', methods=['GET'])
def get_graph_data(user_id):
    user_data = collection.find_one({'_id': user_id})
    if not user_data:
        return jsonify({'error': 'User not found'}), 404

    actual_spendings = user_data.get('actual_spendings', [])

    # Extract monthly spendings for graph
    months = [i + 1 for i in range(len(actual_spendings))]
    needs = [entry['needs'] for entry in actual_spendings]
    wants = [entry['wants'] for entry in actual_spendings]
    savings = [entry['savings'] for entry in actual_spendings]

    # Plotting example using Matplotlib
    plt.plot(months, needs, label='Needs')
    plt.plot(months, wants, label='Wants')
    plt.plot(months, savings, label='Savings')

    plt.xlabel('Month')
    plt.ylabel('Amount')
    plt.title('Monthly Spendings')
    plt.legend()
    plt.show()

    return jsonify({'message': 'Graph data retrieved successfully'})

if __name__ == '__main__':
    app.run(debug=True)