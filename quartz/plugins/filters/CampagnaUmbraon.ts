import { QuartzFilterPlugin } from "../types"

export const FiltroUmbraon: QuartzFilterPlugin = () => ({
    name: "FiltroUmbraon",
    shouldPublish(_ctx, [_tree, vfile]) {
        const fm = vfile.data.frontmatter
        return fm?.Pubblica === true && fm?.Campagna === "Umbraon"
    }
})
