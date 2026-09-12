# Robot Simulator

A React simulator with a robot on a 5×5 grid. Choose a cardinal direction, then Move. Movement stops at grid edges; coordinates start at the top-left.

## Development

Use Node.js 22.12 or newer (Node 24 recommended).

```sh
npm ci
npm start
npm test
npm run build
npm run preview
npm run audit
```

Vite serves development on port 5173. Production output remains `build/` for compatibility with existing static hosting. Run commands from `robot-simulator/`, not the repository root. Relative asset paths support hosting under a subdirectory.

## Security maintenance

The legacy Create React App / react-scripts toolchain was replaced with Vite and Vitest to remove vulnerable transitive dependencies. The original simulator styles and movement behaviour are preserved. GitHub CI installs the lockfile, audits dependencies, tests movement and builds the app. Dependabot checks npm dependencies weekly. A clean audit is a point-in-time result, not a guarantee against future advisories.
