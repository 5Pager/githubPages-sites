# Static Sites Collection for GitHub Pages

This repository serves as a centralized hosting location for multiple static HTML sites deployed via GitHub Pages. It aggregates various AI framework documentation sites and demonstration projects from the `aiFrameworksSource` directory.

## Repository Purpose

This repo is designed to:
- Host multiple static HTML sites organized by framework type and implementation level
- Showcase both Packets and Protocols AI frameworks
- Provide version management for each project implementation
- Serve as a single entry point for all framework demonstrations
- Enable easy deployment via GitHub Pages

## Structure

```
githubPages-sites/
├── index.html                 # Main landing page with framework navigation
├── README.md                  # This documentation
├── 0_AgenticPlan.md          # Project planning and status tracking
├── AgenticActionLogs/        # Detailed logs of automated actions
├── sites/                    # Framework-organized deployments
│   ├── packets-framework/    # Packets framework implementations
│   │   ├── abstract-template/      # Template with placeholders
│   │   ├── westdental-implementation/  # Real WestDental implementation
│   │   └── 5pager-meta/           # Framework applied to itself
│   ├── protocols-framework/  # Protocols framework implementations
│   │   └── westdental-implementation/  # WestDental protocols
│   └── legacy/              # Historical projects
│       └── westdental-simple/     # Early iteration
└── assets/                   # Shared resources (main site only)
    ├── css/                  # Global stylesheets
    ├── js/                   # Shared JavaScript
    └── images/               # Common images and icons
```

## Framework Organization

The repository is organized by framework type and implementation level:

### Packets Framework
Generates comprehensive AI-driven documentation using cortical packet processing:
- **Abstract Template**: Shows framework structure with placeholders (`/packets-framework/abstract-template/`)
- **WestDental Implementation**: Real-world dental practice implementation (`/packets-framework/westdental-implementation/`)
- **5Pager Meta**: Framework applied to itself for 5Pager's own site (`/packets-framework/5pager-meta/`)

### Protocols Framework
Focuses on detailed procedural documentation and service delivery:
- **WestDental Protocols**: Complete dental service protocols (`/protocols-framework/westdental-implementation/`)

### Legacy Projects
Historical implementations before framework development:
- **WestDental Simple**: Early dental practice website (`/legacy/westdental-simple/`)

Each implementation includes:
- **Version Management**: Multiple versions preserved in separate directories
- **Latest Version**: Always accessible via the `latest/` subdirectory
- **Independent Assets**: Each version maintains its own required assets
- **Direct Access**: Sites can be accessed directly via their framework paths

## GitHub Pages Deployment

This repository is configured for GitHub Pages deployment from the root directory. All sites are accessible at:
- Main index: `https://[username].github.io/[repo-name]/`
- Packets framework sites: `https://[username].github.io/[repo-name]/sites/packets-framework/[implementation]/latest/`
- Protocols framework sites: `https://[username].github.io/[repo-name]/sites/protocols-framework/[implementation]/latest/`
- Legacy sites: `https://[username].github.io/[repo-name]/sites/legacy/[project]/latest/`

## Development Workflow

1. **Framework Analysis**: Projects are sourced from `../aiFrameworksSource/` (now organized by framework type)
2. **Asset Collection**: Static HTML and related assets are identified and copied to appropriate framework directories
3. **Version Management**: New versions are added while preserving existing ones within framework structure
4. **Index Updates**: The main landing page is updated to reflect new framework implementations
5. **Deployment**: Changes are committed and automatically deployed via GitHub Pages

## Features

- 📱 **Responsive Design**: All sites and the index page are mobile-friendly
- 🧠 **Framework Organization**: Clear separation between Packets and Protocols frameworks
- 🔗 **Easy Navigation**: Central index page with framework-based organization
- 📋 **Version History**: Complete version tracking for each implementation
- 🎯 **Implementation Levels**: Abstract templates, real implementations, and meta applications
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