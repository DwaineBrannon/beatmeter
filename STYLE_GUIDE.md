# BeatMeter Style Guide

## Code Formatting Standards

### Prettier Configuration

The project uses Prettier for consistent code formatting with these settings:

- Semi-colons: Always
- Single quotes: Preferred
- Tab width: 2 spaces
- Print width: 80 characters
- Trailing commas: ES5 style

### ESLint Rules

- No unused variables (except those starting with uppercase)
- React hooks rules enforced
- React refresh components properly exported

## File Naming Conventions

### Components

- **React Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Styled Components**: PascalCase in same file or `.styles.js` suffix
- **Services**: camelCase with `.js` suffix (e.g., `userService.js`)
- **Utilities**: camelCase with `.js` suffix (e.g., `authHelpers.js`)

### Directories

- **Feature-based**: `/features/auth/`, `/features/music/`
- **Type-based**: `/components/`, `/services/`, `/utils/`
- **Pages**: `/pages/` for top-level route components

## Component Structure Standards

### React Component Template

```jsx
import React from 'react';
import styled from 'styled-components';
import { buttonBase, cardBase } from '@/styles/mixins';

// Styled components at the top
const Container = styled.div`
  ${cardBase}/* Component-specific styles */
`;

const ActionButton = styled.button`
  ${buttonBase}
  background-color: ${props => props.theme.colors.accent};

  &:hover {
    background-color: ${props => props.theme.colors.accentHover};
  }
`;

// Main component
const ComponentName = ({ prop1, prop2 }) => {
  return (
    <Container>
      {/* Component content */}
      <ActionButton onClick={handleClick}>Action</ActionButton>
    </Container>
  );
};

export default ComponentName;
```

### Service Module Template

```javascript
import { authFetch } from '@/utils/api';

/**
 * Service description
 */

/**
 * Function description
 * @param {Object} data - Parameter description
 * @returns {Promise<Object>} Return description
 */
export const functionName = async data => {
  try {
    const response = await authFetch('endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error in functionName:', error);
    throw error;
  }
};
```

## Styling Best Practices

### Theme Usage

Always use theme values instead of hardcoded values:

```javascript
// ✅ Good
color: ${props => props.theme.colors.text.primary};
padding: ${props => props.theme.spacing.medium};

// ❌ Avoid
color: #fff;
padding: 16px;
```

### Responsive Design

Use the provided media queries from mixins:

```javascript
import { media } from '@/styles/mixins';

const ResponsiveContainer = styled.div`
  grid-template-columns: repeat(4, 1fr);

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;
```

### Common Patterns

Use predefined mixins for common patterns:

```javascript
import { cardBase, flexCenter, hoverLift } from '@/styles/mixins';

const Card = styled.div`
  ${cardBase}
  ${hoverLift}
`;

const CenteredContent = styled.div`
  ${flexCenter}
  min-height: 200px;
`;
```

## Directory Structure Guidelines

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared across features
│   └── ui/             # Basic UI elements
├── features/           # Feature-specific code
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   └── music/
├── pages/              # Top-level route components
├── hooks/              # Shared custom hooks
├── services/           # API and business logic
├── styles/             # Global styles and theme
├── utils/              # Helper functions
└── config/             # Configuration files
```

## Scripts Available

### Development

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix auto-fixable linting errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code needs formatting

### Recommended Workflow

1. Before committing: `npm run format && npm run lint:fix`
2. Check build: `npm run build`
3. Test locally: `npm run preview`

## IDE Setup Recommendations

### VS Code Extensions

- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- ES7+ React/Redux/React-Native snippets
- Styled Components
- GitLens

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```
