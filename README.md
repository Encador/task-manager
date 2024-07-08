# `Task Manager`
#### A simple task manager web application.
Made to practice a component-based project structure.

![manager](https://i.postimg.cc/k5G73Vk4/manager.png)

![login](https://i.postimg.cc/Dw226p61/login.png)


#### Functionality
- Add a task
- Remove a task
- Mark task complete
- Edit task name
- Toggle to show completed tasks

#### Account Support
This poject can be used completely stand-alone.
Or be used with [PocketBase](https://pocketbase.io), which adds task persistence via accounts.

# `Frontend Setup`

### Install Project Dependencies 

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
# `Backend Setup`
***Only used to add account support***

**This project is designed to be used with [PocketBase](https://pocketbase.io), an open source BAAS.**

PocketBase should be installed following the official [documentation](https://pocketbase.io/docs/).

### Connect to the Frontend

To connect the frontend to the backend, the ip address on which [PocketBase](https://pocketbase.io) is hosted needs to be added to [pocketbase.ts](src/assets/pocketbase.ts)

Currently, the project is setup to import the ip variable from `srs/assets/pocketbaseIP.ts`

### Import Collections

The final step is to import the [configured](src/assets/pb_schema.json) **users** and **tasks** collections within the [PocketBase](https://pocketbase.io) Admin dashboard.

The json config file can be found in `srs/assets/pb_schema.json`

