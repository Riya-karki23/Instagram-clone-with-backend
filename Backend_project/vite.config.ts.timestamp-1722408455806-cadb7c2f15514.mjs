// vite.config.ts
import { defineConfig } from "file:///C:/project/Backend_project/node_modules/vite/dist/node/index.js";
import adonisjs from "file:///C:/project/Backend_project/node_modules/@adonisjs/vite/build/src/client/main.js";
var vite_config_default = defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ["resources/css/app.css", "resources/js/app.js"],
      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ["resources/views/**/*.edge"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0XFxcXEJhY2tlbmRfcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxccHJvamVjdFxcXFxCYWNrZW5kX3Byb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3QvQmFja2VuZF9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGFkb25pc2pzIGZyb20gJ0BhZG9uaXNqcy92aXRlL2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgYWRvbmlzanMoe1xyXG4gICAgICAvKipcclxuICAgICAgICogRW50cnlwb2ludHMgb2YgeW91ciBhcHBsaWNhdGlvbi4gRWFjaCBlbnRyeXBvaW50IHdpbGxcclxuICAgICAgICogcmVzdWx0IGluIGEgc2VwYXJhdGUgYnVuZGxlLlxyXG4gICAgICAgKi9cclxuICAgICAgZW50cnlwb2ludHM6IFsncmVzb3VyY2VzL2Nzcy9hcHAuY3NzJywgJ3Jlc291cmNlcy9qcy9hcHAuanMnXSxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBQYXRocyB0byB3YXRjaCBhbmQgcmVsb2FkIHRoZSBicm93c2VyIG9uIGZpbGUgY2hhbmdlXHJcbiAgICAgICAqL1xyXG4gICAgICByZWxvYWQ6IFsncmVzb3VyY2VzL3ZpZXdzLyoqLyouZWRnZSddLFxyXG4gICAgfSksXHJcbiAgXSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLG9CQUFvQjtBQUNuUyxPQUFPLGNBQWM7QUFFckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLUCxhQUFhLENBQUMseUJBQXlCLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzVELFFBQVEsQ0FBQywyQkFBMkI7QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
