import {describe, expect, it} from "vitest"
import {mountSuspended} from "@nuxt/test-utils/runtime";
import SiteHeader from "../../components/SiteHeader.vue";

describe("Site Header", async ()=>{
    it("should has text Home", async ()=>{
        const component = await mountSuspended(SiteHeader)
        expect(component.text()).toContain("Home")
    })
})