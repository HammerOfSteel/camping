#!/usr/bin/env python3
from PIL import Image, ImageDraw
import os

# Create directories
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins', exist_ok=True)
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping', exist_ok=True)
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing', exist_ok=True)

# Colors matching Lits Camping theme
FOREST_GREEN = (34, 85, 51)
CREAM = (245, 242, 238)
BLUE = (70, 130, 180)

def create_image(path, title, color):
    img = Image.new('RGB', (1024, 683), color=CREAM)
    d = ImageDraw.Draw(img)
    d.rectangle([(0, 0), (1024, 150)], fill=color)
    d.text((50, 60), title, fill=CREAM, font=None)
    img.save(path)

# Create cabin images
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-6bed-1.jpg', 
             '6-Bed Cottage Exterior', FOREST_GREEN)
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-6bed-2.jpg',
             '6-Bed Cottage Interior', FOREST_GREEN)
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-4bed-1.jpg',
             '4-Bed Cottage Exterior', BLUE)
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-4bed-2.jpg',
             '4-Bed Cottage Interior', BLUE)

# Create camping images
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-aerial.jpg',
             'Camping Area Overview', FOREST_GREEN)
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/rv-site.jpg',
             'RV Parking Site', BLUE)

# Create canoeing images
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-1.jpg',
             'Paddling Adventure', FOREST_GREEN)
create_image('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-2.jpg',
             'Sunset Expedition', BLUE)

print("✓ All images created successfully!")
