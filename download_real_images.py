#!/usr/bin/env python3
import os
import urllib.request
import ssl

# Disable SSL verification
ssl._create_default_https_context = ssl._create_unverified_context

# Create directories
os.makedirs('frontend/public/images', exist_ok=True)

# Real image URLs from Lits Camping CDN
images = {
    # Cabin images
    'frontend/public/images/cabin-35kvm.jpg': 'https://images.staticjw.com/lit/4205/imgp7061.jpg',
    'frontend/public/images/cabin-16kvm.jpg': 'https://images.staticjw.com/lit/5410/img_20190819_132722.jpg',
    'frontend/public/images/cabin-8kvm.jpg': 'https://images.staticjw.com/lit/3042/d5855256-1c9d-4484-9827-51d491297dacjfif.jpg',
    
    # Camping images
    'frontend/public/images/camping-1.jpg': 'https://images.staticjw.com/lit/5821/20161123_153630.jpg',
    'frontend/public/images/camping-2.jpg': 'https://images.staticjw.com/lit/5821/img_2622.jpg',
    'frontend/public/images/camping-3.jpg': 'https://images.staticjw.com/lit/3042/20150808_151616.jpg',
    'frontend/public/images/camping-4.jpg': 'https://images.staticjw.com/lit/5821/20170522_132527.jpg',
    
    # Canoe images
    'frontend/public/images/canoe-1.jpg': 'https://images.staticjw.com/lit/6891/20240614_101857.jpg',
    'frontend/public/images/canoe-2.jpg': 'https://images.staticjw.com/lit/3571/img_0048.jpg',
    'frontend/public/images/canoe-3.jpg': 'https://images.staticjw.com/lit/4572/kanot.jpg',
    'frontend/public/images/canoe-4.jpg': 'https://images.staticjw.com/lit/5821/paddling.jpg',
}

print("Downloading real images from Lits Camping...")
failed = []
for local_path, url in images.items():
    try:
        print(f'Downloading {url.split("/")[-1]}...', end=' ')
        # Add User-Agent to bypass hotlink protection
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible)'})
        urllib.request.urlopen(req)
        with urllib.request.urlopen(req) as response:
            with open(local_path, 'wb') as f:
                f.write(response.read())
        file_size = os.path.getsize(local_path)
        print(f'✓ ({file_size} bytes)')
    except Exception as e:
        print(f'✗ Failed: {e}')
        failed.append((local_path, url))

if failed:
    print(f'\n⚠ {len(failed)} images failed to download')
    for path, url in failed:
        print(f'  - {url}')
else:
    print(f'\n✓ All {len(images)} images downloaded successfully!')
