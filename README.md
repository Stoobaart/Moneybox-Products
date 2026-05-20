# Moneybox Product Explorer

A React-based product explorer that displays Moneybox financial products grouped by category.

The application renders a centralised view of product categories and allows users to expand categories to view product details including descriptions and assets.

---

## 🚀 Running the project

```bash

npm install

npm run dev

🧱 Overview

This project is built using React and TypeScript with a feature-based structure.

The UI is driven by a static JSON dataset representing:

* Product categories
* Products within each category

This simulates a backend-driven system while keeping the implementation focused on frontend behaviour.

State is kept local and minimal:

* Category selection is managed at the explorer level
* Product expansion state is managed within each product component

⸻

✏️ Updating content (no developer required)

Product and category data is stored in:

src/data/products.json

This file can be updated directly to:

* Add new categories
* Add new products
* Modify product descriptions or assets

In a production environment, this would typically be replaced by a CMS or API-driven data source to allow non-technical users to manage content.

⸻

♿ Accessibility

The implementation includes:

* Semantic HTML structure
* Keyboard navigable interactions via native button elements
* Visible focus states
* aria-expanded on expandable sections

⸻

🎨 Styling approach

* CSS Modules for scoped component styling
* Responsive grid layout (3 → 2 → 1 columns)
* Minimal, clean UI inspired by fintech design systems

⸻

🔮 Future improvements

If this feature were extended beyond the scope of this task, I would focus on:

* Replacing the static JSON dataset with an API-driven data source, enabling dynamic updates without redeploying the frontend.

* Introducing a content management system (or internal tooling) to allow business users to manage categories and products without developer involvement.