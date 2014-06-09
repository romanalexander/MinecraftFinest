import json
import random

from flask import Flask, safe_join, request, abort, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from mock import mockUserList
from mock import mockProductList


app = Flask(__name__, static_folder='../app')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
db = SQLAlchemy(app)


@app.route('/')
def hello_world():
    return app.send_static_file('index.html'), 200


@app.route('/styles/<path:filepath>')
def static_styles(filepath):
    return app.send_static_file(safe_join('styles/', filepath))


@app.route('/views/<path:filepath>')
def static_views(filepath):
    return app.send_static_file(safe_join('views/', filepath))


@app.route('/scripts/<path:filepath>')
def static_scripts(filepath):
    return app.send_static_file(safe_join('scripts/', filepath))


@app.route('/bower_components/<path:filepath>')
def static_bower_components(filepath):
    return app.send_static_file(safe_join('bower_components/', filepath))


@app.route('/api/users')
def get_all_users():
    """
    :return: All users, paginated. Cannot exceed 100 users per request.
    """
    try:
        count = int(request.args.get('count', 100))
        page = int(request.args.get('page', 1))
    except ValueError:
        count = 100
        page = 1
    if count < 0 or count > 100:
        count = 100
    if page < 1:
        page = 1

    return json.dumps(random.sample(mockUserList, count))


@app.route('/api/users/<username>')
def get_user(username):
    if not username:
        return abort(404)

    return jsonify({
        'username': username,
        'minigame_records': [
            {
                'name': 'TNT Run',
                'wins': random.randint(1, 50),
                'losses': random.randint(1, 100)
            },
            {
                'name': 'Attack of the Dead',
                'wins': random.randint(1, 50),
                'losses': random.randint(1, 100)
            }
        ]
    })


@app.route('/api/online_count')
def get_online_count():
    """
    :return: Server's total online counts
    """

    return str(random.randint(10, 100))


@app.route('/api/total_players_count')
def get_total_players_count():
    """
    :return: Server's lifetime player count.
    """
    return '500'


@app.route('/api/server_status')
def get_server_status():
    """
    :return: Server's current uptime status
    """
    return json.dumps([
        {
            'name': 'World 1',
            'onlineCount': random.randint(1, 50),
            'totalLoad': 50
        },
        {
            'name': 'World 2',
            'onlineCount': random.randint(1, 50),
            'totalLoad': 50
        }
    ])


@app.route('/api/games')
def get_all_games():
    """
    :return: Server's current game listing.
    """

    retrList = [
        {
            'id': 1,
            'shortName': 'spleef',
            'fullName': 'Kitten Games',
            'shortDescription': 'Play this minigame!',
            'fullDescription': 'Play this minigame!',
            'images': {
                'thumb': 'http://placekitten.com/900/300',
                'large': 'http://placekitten.com/300/300'
            },
            'activeUsers': random.randint(1, 50)
        },
        {
            'id': 2,
            'shortName': 'halo',
            'fullName': 'Draw Kittens',
            'shortDescription': 'Play draw kittens!',
            'fullDescription': 'Play draw kittens!',
            'images': {
                'thumb': 'http://placekitten.com/901/300',
                'large': 'http://placekitten.com/302/300'
            },
            'activeUsers': random.randint(1, 50)
        }
    ]

    return json.dumps(retrList)


@app.route('/api/leaderboards/<game>')
def get_leaderboard(game):
    if not game:
        abort(404)
    try:
        count = int(request.args.get('count', 100))
        page = int(request.args.get('page', 1))
    except ValueError:
        count = 100
        page = 1
    if count < 0 or count > 100:
        count = 100
    if page < 1:
        page = 1

    retrList = []
    for idx in range(1, count):
        retrList.append({
            'rank': idx + (count * (page - 1)),
            'username': random.choice(mockUserList),
            'wins': random.randint(1, 50),
            'losses': random.randint(1, 50),
            'accuracy': random.randint(0, 100)

        })

    return jsonify(retrList)


@app.route('/api/store/products')
def get_all_products():
    return jsonify(mockProductList)


@app.route('/api/top_stats/<game>')
def get_top_stats(game):
    retrData = [
        {
            'name': 'Most Kills',
            'score': [
                {
                    'username': random.choice(mockUserList),
                    'value': random.randint(1, 10)
                },
                {
                    'username': random.choice(mockUserList),
                    'value': random.randint(1, 10)
                },
            ]
        },
        {
            'name': 'Most Deaths',
            'score': [
                {
                    'username': random.choice(mockUserList),
                    'value': random.randint(1, 10)
                },
                {
                    'username': random.choice(mockUserList),
                    'value': random.randint(1, 10)
                },
            ]
        }
    ]
    return jsonify(retrData)


if __name__ == '__main__':
    app.run(debug=True)
