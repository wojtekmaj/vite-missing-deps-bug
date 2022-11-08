function module1() {
  console.log("I am Module 1");

  const module2Url = new URL("module-2", import.meta.url);
  console.log("Module 2 URL", module2Url.href);

  const module2OtherUrl = new URL("module-2/other", import.meta.url);
  console.log("Module 2 other URL", module2OtherUrl.href);

  fetch(module2OtherUrl.href)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      if (module2OtherUrl.href.includes(".vite/deps")) {
        console.log("🥳 Issue fixed!");
      } else {
        console.log(
          "Because packages in node_modules are actually symlinks, the issue cannot be reproduced. Run `yarn copy-packages` and `yarn dev --force` to reproduce the issue."
        );
      }
    })
    .catch((error) => {
      console.log("😭 Issue still present!");
    });
}

export { module1 };
