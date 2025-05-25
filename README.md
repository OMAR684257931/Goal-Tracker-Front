# 🎯 GoalTracker Frontend (Angular)

Frontend interface for **GoalTracker**, a Smart Personal & Public Goal Management Tool. Built using **Angular 17 (standalone components)** with a modern UI and API integration.

It connects to the backend [GoalTracker API](https://github.com/yourname/goaltracker-api) powered by **NestJS**.

---

## 🚀 Stack

| Layer       | Tech                      |
| ----------- | ------------------------- |
| Framework   | Angular 17 (standalone)   |
| Styling     | SCSS                      |
| HTTP Client | Axios                     |
| State/Auth  | LocalStorage (JWT)        |
| UI          | Custom Forms + Tree Views |

---

## 🔥 Features

* 🔐 Login/Register with JWT storage
* 📂 Dashboard to manage your private goals
* 🧱 Goal nesting (up to 2 levels)
* ✏️ Create, update, delete goals
* 🌍 Public goal sharing support
* 🎨 Modern form styling and alerts

---

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/         # Login/Register components
│   ├── dashboard/    # Goal management UI
│   ├── shared/       # Services, guards, models
│   ├── app.routes.ts # Angular standalone routing
│   └── app.component.ts
```

---

## ▶️ Setup Instructions

```bash
# 1. Clone the repo
cd goaltracker-frontend

# 2. Install dependencies
npm install

# 3. Start the app
npm start

# App runs at:
http://localhost:4200
```

Make sure the backend is running on `http://localhost:3000`.

---

## 🌐 Routes

| Route         | Description                 |
| ------------- | --------------------------- |
| `/login`      | Login form                  |
| `/register`   | User registration           |
| `/dashboard`  | Private goal dashboard      |
| `/public`     | View all public goals       |
| `/public/:id` | View a specific public goal |

---

## 🔐 Auth Handling

* Token is stored in `localStorage` under `gt_token`
* Guards:

  * `authGuard`: restricts private routes
  * `guestGuard`: prevents access to login/register when logged in
* Axios interceptor injects JWT into all requests

---

## 📦 Environment

Edit in `src/environments/environment.ts`:

```ts
export const environment = {
  apiUrl: 'http://localhost:3000'
};
```

---

## 📸 Screenshots (optional)

> You can add images here like:
>
> * Login screen
> * Dashboard with nested goals
> * Public view UI

---

## 🧪 Unit Testing (optional)

To run tests:

```bash
npm run test
```

---

## 📌 Notes

* Drag & drop ordering is handled visually (future improvement)
* No pagination yet on public goals
* Uses inline modals and styled alerts for UX clarity

---

## 👨‍💻 Author

**Omar Eid**
Senior Full Stack Developer — Laravel | NestJS | Angular | Docker
🔗 [linkedin.com/in/omar-eid](https://linkedin.com/in/omar-eid)

---

