# Pre-Launch Checklist ✅

Verify everything is set up correctly before starting development.

## 🚀 Environment Setup

- [ ] Docker Desktop is installed and running
- [ ] Docker Compose is available (`docker-compose --version`)
- [ ] Project is cloned/extracted to: `/Users/terrygoleman/Documents/dev/lits_camping`
- [ ] `.env` file exists in project root
- [ ] `.env` contains: `NEXT_PUBLIC_THEME=nordic-standard`

## 📦 Project Files

### Root Level Files
- [ ] `docker-compose.yml` exists
- [ ] `.env` exists
- [ ] `.env.example` exists
- [ ] `.gitignore` exists
- [ ] `README.md` exists
- [ ] `GETTING_STARTED.md` exists
- [ ] `DOCKER.md` exists
- [ ] `SETUP_COMPLETE.md` exists
- [ ] `THEMES_OVERVIEW.md` exists

### Frontend Files
- [ ] `frontend/Dockerfile` exists
- [ ] `frontend/package.json` exists
- [ ] `frontend/tsconfig.json` exists
- [ ] `frontend/next.config.js` exists
- [ ] `frontend/tailwind.config.ts` exists
- [ ] `frontend/postcss.config.js` exists

### Theme Files
- [ ] `frontend/src/styles/themes/index.ts` exists
- [ ] `frontend/src/styles/themes/nordic-standard.ts` exists
- [ ] `frontend/src/styles/themes/nordic-minimal.ts` exists
- [ ] `frontend/src/styles/themes/adventure-bold.ts` exists

### Application Files
- [ ] `frontend/src/app/page.tsx` exists
- [ ] `frontend/src/app/layout.tsx` exists
- [ ] `frontend/src/styles/globals.css` exists

## 🐳 Docker Verification

### Start Services
```bash
cd /Users/terrygoleman/Documents/dev/lits_camping
docker-compose up
```

- [ ] Command runs without errors
- [ ] Output shows: "Building frontend"
- [ ] After build, shows: "frontend Started"
- [ ] No error messages appear

### Health Check
While containers are running:

```bash
docker-compose ps
```

- [ ] All services show status: "Up"
- [ ] No services show "Exited" or "Restarting"

### Access Application
```
http://localhost:3000
```

- [ ] Page loads successfully
- [ ] No 404 or connection errors
- [ ] "Welcome to Lits Camping" text visible
- [ ] Three color palette sections visible
- [ ] Component examples visible

## 🎨 Theme Verification

### Current Theme (Nordic Standard)
At http://localhost:3000:

- [ ] Forest Green colors are visible
- [ ] Nordic Blue colors are visible
- [ ] Cream/light backgrounds are visible
- [ ] Orange button is visible
- [ ] Color palette section displays all colors

### Theme Switching
```bash
# In .env, change:
NEXT_PUBLIC_THEME=nordic-standard
# To:
NEXT_PUBLIC_THEME=adventure-bold

# Restart:
docker-compose restart frontend

# Refresh browser at http://localhost:3000
```

- [ ] Page refreshes successfully
- [ ] Colors change to adventure bold theme (oranges, deep blues)
- [ ] All components update with new theme
- [ ] No errors in console

### Test All Three Themes
- [ ] `nordic-standard` - Works, colors display correctly
- [ ] `nordic-minimal` - Works, light colors display correctly
- [ ] `adventure-bold` - Works, vibrant colors display correctly

## 🖥️ Development Features

### Hot Reload Test
1. Edit `frontend/src/app/page.tsx`
2. Change heading text or color
3. Save file
4. Refresh browser

- [ ] Changes appear without container restart
- [ ] No console errors

### Container Logs
```bash
docker-compose logs -f frontend
```

- [ ] Shows development server running
- [ ] Shows "ready - started server on 0.0.0.0:3000"
- [ ] No error messages

### Access Container Shell
```bash
docker-compose exec frontend sh
```

- [ ] Shell prompt appears (`#` on Linux/Mac)
- [ ] `npm list` command works
- [ ] `ls -la src/` shows theme files

## 📱 Responsive Design

### Mobile View (375px)
At http://localhost:3000 with browser DevTools set to mobile:

- [ ] Header is responsive
- [ ] Text is readable
- [ ] Buttons are large enough to tap
- [ ] No horizontal scroll

### Tablet View (768px)
At http://localhost:3000 with browser DevTools set to tablet:

- [ ] Layout is appropriate
- [ ] Columns reflow correctly
- [ ] Navigation is readable

### Desktop View (1024px+)
At http://localhost:3000 at full screen:

- [ ] Full layout is visible
- [ ] Colors display correctly
- [ ] No layout issues

## 🎯 Development Ready

- [ ] Can run `docker-compose up` from project root
- [ ] Website loads at http://localhost:3000
- [ ] All three themes can be switched via .env
- [ ] Code changes appear via hot reload
- [ ] Can edit files in `frontend/src/`
- [ ] Documentation is clear and helpful

## 🚨 Troubleshooting

If any checks failed, try:

### Port 3000 Already in Use
```bash
# Find and kill process
lsof -i :3000
kill -9 <PID>

# Or change port in docker-compose.yml
# - "3000:3000" → - "3001:3000"
```

### Docker Build Failures
```bash
# Clean rebuild
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Hot Reload Not Working
```bash
# Restart container
docker-compose restart frontend

# Hard refresh browser
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)
```

### Can't Access Container
```bash
# Check if container is running
docker-compose ps

# Check logs
docker-compose logs frontend

# Restart if needed
docker-compose restart frontend
```

### Theme Not Changing
```bash
# Verify .env is correct
cat .env | grep NEXT_PUBLIC_THEME

# Verify restart worked
docker-compose logs frontend | grep "theme"

# Try rebuild
docker-compose down
docker-compose build --no-cache
docker-compose up
```

## 📖 Next Steps (After Verification)

Once all checks pass:

1. **Read documentation** in this order:
   - `GETTING_STARTED.md`
   - `THEMES_OVERVIEW.md`
   - `DOCKER.md`

2. **Create first component**
   - New file: `frontend/src/components/Header.tsx`
   - Use: `getActiveTheme()` function
   - Test with all three themes

3. **Create pages**
   - New folder: `frontend/src/app/cabins/`
   - New file: `frontend/src/app/cabins/page.tsx`
   - Reference: `PAGES_INVENTORY.md` for content

4. **Set up version control** (if not already done)
   ```bash
   cd /Users/terrygoleman/Documents/dev/lits_camping
   git status
   git add .
   git commit -m "Initial site setup with Docker and theme system"
   git branch develop
   git checkout develop
   ```

5. **Start feature development**
   - Create feature branches from `develop`
   - Build components
   - Test all themes

## ✨ Success Indicators

You'll know everything is working when:

- ✅ `docker-compose up` starts without errors
- ✅ Website loads at http://localhost:3000
- ✅ Can see color palette on homepage
- ✅ Theme switches work via .env
- ✅ Code changes appear instantly (hot reload)
- ✅ Can access container with `docker-compose exec frontend sh`
- ✅ All three themes display correctly
- ✅ No errors in browser console or Docker logs

---

## 🎉 Ready to Build!

Once you've verified everything above, you're ready to start building components and pages. Each component will automatically support all three themes!

**Happy coding!** 🚀

Remember:
- Edit code in `frontend/src/`
- Refresh browser to see changes (hot reload)
- Use `getActiveTheme()` to access theme colors
- Test all three themes as you build
- See `GETTING_STARTED.md` for quick reference

Questions? Check the documentation files! 📚
