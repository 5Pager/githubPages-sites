# Static Sites Collection for GitHub Pages

This repository serves as a centralized hosting location for multiple static HTML sites deployed via GitHub Pages. It aggregates various AI framework documentation sites and demonstration projects from the `aiFrameworksSource` directory.

## Repository Purpose

This repo is designed to:
- Host multiple static HTML sites in an organized manner
- Provide version management for each project
- Serve as a single entry point for all deployed sites
- Enable easy deployment via GitHub Pages

## Structure

```
githubPages-sites/
├── index.html                 # Main landing page with project navigation
├── README.md                  # This documentation
├── 0_AgenticPlan.md          # Project planning and status tracking
├── AgenticActionLogs/        # Detailed logs of automated actions
├── sites/                    # Individual project deployments
│   ├── project-name/
│   │   ├── v1.0/            # Version-specific deployments
│   │   ├── v1.1/
│   │   └── latest/          # Points to current stable version
│   └── another-project/
└── assets/                   # Shared resources
    ├── css/                  # Global stylesheets
    ├── js/                   # Shared JavaScript
    └── images/               # Common images and icons
```

## Hosted Projects

Each project in the `sites/` directory represents a static HTML site with:
- **Version Management**: Multiple versions preserved in separate directories
- **Latest Version**: Always accessible via the `latest/` subdirectory
- **Independent Assets**: Each version maintains its own required assets
- **Direct Access**: Sites can be accessed directly via their paths

## GitHub Pages Deployment

This repository is configured for GitHub Pages deployment from the root directory. All sites are accessible at:
- Main index: `https://[username].github.io/[repo-name]/`
- Individual projects: `https://[username].github.io/[repo-name]/sites/[project]/latest/`
- Specific versions: `https://[username].github.io/[repo-name]/sites/[project]/[version]/`

## Development Workflow

1. **Source Analysis**: Projects are sourced from `../aiFrameworksSource/`
2. **Asset Collection**: Static HTML and related assets are identified and copied
3. **Version Management**: New versions are added while preserving existing ones
4. **Index Updates**: The main landing page is updated to reflect new projects
5. **Deployment**: Changes are committed and automatically deployed via GitHub Pages

## Features

- 📱 **Responsive Design**: All sites and the index page are mobile-friendly
- 🔗 **Easy Navigation**: Central index page with links to all projects
- 📋 **Version History**: Complete version tracking for each project
- ⚡ **Fast Loading**: Optimized static assets and minimal overhead
- 🔍 **SEO Friendly**: Proper meta tags and structure for search engines

## Maintenance

This repository includes automated logging and tracking:
- **AgenticActionLogs/**: Detailed logs of all automated actions taken
- **0_AgenticPlan.md**: Current status and planning documentation
- **Git History**: Comprehensive commit messages for all changes

## Contributing

When adding new projects or versions:
1. Follow the established directory structure
2. Update the main index page to include new projects
3. Maintain proper version numbering
4. Ensure all assets are properly copied
5. Test deployment before finalizing

## License

This repository contains aggregated static sites from various sources. Please refer to individual project directories for specific licensing information.

---

*Automated repository management powered by AI agent workflows*