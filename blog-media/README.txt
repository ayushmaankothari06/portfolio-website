Upload your blog photos in this folder.

Recommended image formats:
- .jpg / .jpeg
- .png
- .webp
- .gif
- .avif
- .bmp
- .svg

How gallery loading works:
1) On local Python server (python -m http.server), images are auto-discovered from this folder.
2) If auto-discovery is unavailable on a host, list image filenames inside index.json.

Example index.json:
{
  "images": ["photo1.jpg", "event-2.png", "workshop.webp"]
}
