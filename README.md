

# Mindweave Admin Dashboard

Mindweave Admin Dashboard is a modern, responsive admin panel built with Next.js and React. It provides a sleek interface for managing products, orders, analytics, and more, making it ideal for e-commerce and business management applications.

## Features

- **Dashboard Overview**: Visualize key metrics and analytics with charts and cards.
- **Product Management**: Add, edit, filter, and delete products with dynamic table updates.
- **Order Management**: View, filter, and manage orders efficiently.
- **Price Range Filter**: Filter products by predefined price ranges for quick access.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **404 Not Found Page**: Modern, user-friendly error page for invalid routes.
- **Reusable UI Components**: Includes buttons, cards, tables, dialogs, and more.

## Technologies Used

- **Next.js**: Server-side rendering and routing.
- **React**: Component-based UI development.
- **TypeScript**: Type safety and improved developer experience.
- **Tailwind CSS / PostCSS**: Utility-first CSS for rapid styling.
- **PNPM**: Fast, disk-efficient package manager.

## Project Structure

```
components.json
next-env.d.ts
next.config.ts
package.json
pnpm-lock.yaml
postcss.config.mjs
README.md
app/
	globals.css
	layout.tsx
	not-found.tsx
	page.tsx
	api/
		orders/
			route.ts
		products/
			route.ts
	orders/
		columns.tsx
		orders-table.tsx
		page.tsx
	products/
		columns.tsx
		page.tsx
		products-table.tsx
components/
	AppSidebar.tsx
	ProductFilter.tsx
	Analytics/
		VisitChart.tsx
	Cards/
		SalesVolumeCard.tsx
	Dashboard/
		Header.tsx
		Notification.tsx
		OrderTable.tsx
		RecentOrders.tsx
		TopSellingProductCard.tsx
	ui/
		alert-dialog.tsx
		avatar.tsx
		button.tsx
		calendar.tsx
		card.tsx
		chart.tsx
		dropdown-menu.tsx
		input.tsx
		popover.tsx
		separator.tsx
		sheet.tsx
		sidebar.tsx
		skeleton.tsx
		sonner.tsx
		table.tsx
		tooltip.tsx
constants/
	order.ts
datas/
	chartdata.ts
	menus.ts
	orders.tsx
	products.ts
hooks/
	use-mobile.ts
lib/
	utils.ts
public/
	images/
types/
	order.ts
	products.ts
```

- **app/**: Main application pages and API routes.
- **components/**: Reusable UI and dashboard components.
- **constants/**: Static data and configuration.
- **datas/**: Sample data for charts, menus, orders, and products.
- **hooks/**: Custom React hooks.
- **lib/**: Utility functions.
- **public/**: Static assets (images, etc.).
- **types/**: TypeScript type definitions.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- PNPM (or npm/yarn)

### Installation

1. **Clone the repository:**
	 ```bash
	 git clone https://github.com/Syntacticdev/Mindweave---Admin-Dashboard.git
	 cd Mindweave---Admin-Dashboard
	 ```
2. **Install dependencies:**
	 ```bash
	 pnpm install
	 # or
	 npm install
	 ```
3. **Run the development server:**
	 ```bash
	 pnpm dev
	 # or
	 npm run dev
	 ```
4. **Open in browser:**
	 Visit `http://localhost:3000` to view the dashboard.

## Usage

- **Dashboard**: View analytics and recent activity.
- **Products**: Manage product listings, filter by price, and perform CRUD operations.
- **Orders**: Track and manage customer orders.
- **Sidebar**: Navigate between dashboard sections.

## Customization

- Update sample data in `datas/` for your own products and orders.
- Modify UI components in `components/` to match your branding.
- Extend API routes in `app/api/` for backend integration.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact [Syntacticdev](https://github.com/Syntacticdev).
