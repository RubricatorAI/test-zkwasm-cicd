# my-zkwasm-app

hell world

## Features

- Rust zkWasm module
- TypeScript service
- Basic state management
- Settlement logic

## Prerequisites

- [zkWasm DApp CLI](https://github.com/DelphinusLab/zkwasm-dapp-starter) installed globally
- Node.js (>=16.0.0)
- Rust toolchain with wasm32-unknown-unknown target
- wasm-pack and wasm-opt

## Quick Start

The project has been automatically set up with:
- ✅ TypeScript dependencies installed
- ✅ TypeScript files compiled
- ✅ Git repository initialized
- ✅ GitHub Actions configured (if selected)

You can immediately start building:

```bash
cd my-zkwasm-app
zkwasm-dapp build        # Build the zkWasm application
```
## Development Workflow

### 1. Initial Setup (Already Done)

When you ran `zkwasm-dapp create my-zkwasm-app`, the CLI automatically:
- Installed all TypeScript dependencies (`npm install` in ts/ directory)
- Compiled TypeScript files (`npx tsc` in ts/ directory)
- Set up the project structure

**⚠️ Important**: If you add new dependencies or modify TypeScript files, you'll need to manually reinstall and recompile:

```bash
# After adding new npm dependencies:
cd ts
npm install
npx tsc
cd ..

# After modifying TypeScript files:
cd ts
npx tsc
cd ..
```

### 2. Validate Project Structure

```bash
# Validate project configuration and dependencies
zkwasm-dapp validate
```

### 3. Build the Application

```bash
# Build the zkWasm application
zkwasm-dapp build
# or alternatively: make build
```

The build process will:
- Compile Rust code to WebAssembly
- Optimize WASM with wasm-opt
- Generate TypeScript definitions
- Calculate MD5 hash for deployment tracking

### 4. Run the Application

```bash
# Run the zkWasm service locally
make run
```

### 5. Deployment Preparation

```bash
# Generate publish script for zkWasm hub deployment and optionally execute it.
zkwasm-dapp publish

# Check deployment readiness
zkwasm-dapp check --verbose
```

## Development Notes

### TypeScript Development

The TypeScript service is located in the `ts/` directory. During project creation, the CLI automatically:
1. Installed all dependencies with `npm install`
2. Compiled TypeScript to JavaScript with `npx tsc`

### Build Process

```bash
make build          # Complete build pipeline
```

This will:
1. Generate admin public key from the default admin key or the one you specified in the .env file
2. Use pre-compiled TypeScript service (from ts/ directory)
3. Build Rust to WASM with wasm-pack
4. Optimize WASM with wasm-opt
5. Copy artifacts to build directory
6. Calculate and display MD5 hash

### Local Testing

```bash
make run            # Start local zkWasm service
```

### Deployment to Production

#### 1. Publish to zkWasm Hub

```bash
zkwasm-dapp publish      # Generate and run publish script
```

#### 2. Deployment Platform Setup

For deployment to production platforms:

```bash
zkwasm-dapp check        # Verify deployment readiness
```

#### 3. GitHub CI/CD Setup

For automated deployment:

1. **Switch to deployment branch:**
   ```bash
   git checkout -b zkwasm-deploy
   ```

2. **Enable GitHub Actions:**
   - Go to your repository settings
   - Navigate to Actions tab
   - Enable GitHub Actions workflows

3. **Configure Container Registry:**
   - Set up GitHub Container Registry (GCR) access
   - Configure package settings for container images
   - Ensure proper permissions for automated builds

4. **Deploy:**
   ```bash
   git push origin zkwasm-deploy
   ```

The CI/CD pipeline will automatically:
- Build the zkWasm application
- Create container images
- Push to GitHub Container Registry

After successful GitHub Container Registry package build, you can deploy your application using the zkWasm deployment platform at [https://deployment.zkwasmhub.com/](https://deployment.zkwasmhub.com/).

## Project Structure

```
my-zkwasm-app/
├── src/                    # Rust source code
│   ├── lib.rs             # Main library entry
│   ├── state.rs           # State management
│   ├── settlement.rs      # Settlement logic
│   └── config.rs          # Configuration
├── ts/                     # TypeScript service
│   ├── src/               # TypeScript source files
│   ├── package.json       # Node.js dependencies
│   └── tsconfig.json      # TypeScript configuration
├── build-artifacts/       # Build outputs
├── Cargo.toml             # Rust configuration
├── Makefile               # Build automation
└── README.md              # This file
```

## Available Commands

| Command | Description |
|---------|-------------|
| `zkwasm-dapp init` | Initialize development environment |
| `zkwasm-dapp validate` | Validate project structure |
| `zkwasm-dapp build` | Build the application |
| `zkwasm-dapp check` | Check deployment readiness |
| `zkwasm-dapp publish` | Generate/run publish script |
| `make build` | Alternative build command |
| `make run` | Run local service |
| `make clean` | Clean build artifacts |

## More Information

For detailed documentation and advanced topics, visit:
- **zkWasm Development Recipe**: https://development-recipe.zkwasm.ai/
---

Generated with zkwasm-dapp-cli v1.0.17