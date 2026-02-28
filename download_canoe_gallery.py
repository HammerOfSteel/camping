#!/usr/bin/env python3
import os
import urllib.request
import ssl

# Disable SSL verification
ssl._create_default_https_context = ssl._create_unverified_context

# Create directory
os.makedirs('frontend/public/images/canoe-gallery', exist_ok=True)

# Canoe gallery images from WordPress
images = {
    'canoe-gallery-1.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_59.jpg',
    'canoe-gallery-2.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_60.jpg',
    'canoe-gallery-3.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_61.jpg',
    'canoe-gallery-4.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_62.jpg',
    'canoe-gallery-5.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_63.jpg',
    'canoe-gallery-6.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_64.jpg',
    'canoe-gallery-7.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_65.jpg',
    'canoe-gallery-8.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_66.jpg',
    'canoe-gallery-9.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_67.jpg',
    'canoe-gallery-10.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_68.jpg',
    'canoe-gallery-11.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_69.jpg',
    'canoe-gallery-12.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_70.jpg',
    'canoe-gallery-13.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_71.jpg',
    'canoe-gallery-14.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_2.jpg',
    'canoe-gallery-15.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_3.jpg',
    'canoe-gallery-16.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_1.jpg',
    'canoe-gallery-17.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_4.jpg',
    'canoe-gallery-18.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_5.jpg',
    'canoe-gallery-19.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanotgalleri_48.jpg',
    'canoe-gallery-20.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanot_16.jpg',
    'canoe-gallery-21.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/05/mattclifford_5.jpg',
    'canoe-gallery-22.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/05/mattclifford_3.jpg',
    'canoe-gallery-23.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/05/mattclifford_11.jpg',
    'canoe-gallery-24.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/05/mattclifford_1.jpg',
    'canoe-gallery-25.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/05/4maj2017_1.jpg',
    'canoe-gallery-26.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/05/mattclifford_12.jpg',
    'canoe-gallery-27.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanot_13.jpg',
    'canoe-gallery-28.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanot_14.jpg',
    'canoe-gallery-29.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanot_2.jpg',
    'canoe-gallery-30.jpg': 'https://enlitscamping.wordpress.com/wp-content/uploads/2017/02/kanot_1.jpg',
}

print("Downloading canoe gallery images...")
for filename, url in images.items():
    filepath = f'frontend/public/images/canoe-gallery/{filename}'
    try:
        print(f"Downloading {filename}...", end=' ')
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        size = os.path.getsize(filepath)
        print(f"✓ ({size} bytes)")
    except Exception as e:
        print(f"✗ {e}")

print("\nDownload complete!")
