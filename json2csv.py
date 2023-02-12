# json2csv.py -
# convert flashcards from JSON file format to CSV format

import csv
import json

def json_to_csv(json_file):
    with open(json_file, encoding='utf-8') as f:
        data = json.load(f)

    filename = data['title'] + '.csv'
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Language', 'Front', 'Back', 'Rating'])

        for language, cards in data.items():
            if language == 'title':
                continue
            for card in cards:
                writer.writerow([language, card['front'], card['back'], card['rating']])

json_to_csv("iloveyou.json") 
