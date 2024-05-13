import { describe, expect, it } from "vitest";
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import HomePage from "../../pages/index.vue";
import { createApp } from "vue";

mockNuxtImport("useAsyncQuery", () => {
  return () => {
    return {
      data: {
        value: {
          humans: [
            { __typename: "Human", name: "1111" },
            { __typename: "Human", name: "2222" },
          ],
        },
      },
    };
  };
});

mockNuxtImport("useFetch", () => {
  return () => {
    return {
      data: {
        value: {
          data: { products: [{ productPrice: 333 }, { productPrice: null }] },
        },
      },
    };
  };
});

describe("Home page", async () => {
  it("should has 333", async () => {
    const component = await mountSuspended(HomePage);
    console.log("component.vm.pp=", component.vm.pp);
    console.log("just before expect:", component.text());
    expect(component.text()).toContain("333");
  });
  it("should has 1111", async () => {
    const component = await mountSuspended(HomePage);
    console.log("component.vm.humans=", component.vm.humans);
    console.log("just before expect:", component.text());
    expect(component.text()).toContain("1111");
  });
});
