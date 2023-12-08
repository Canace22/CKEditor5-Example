declare namespace _default {
    export { normalizeStyles };
    export { getDefaultStylesConfiguration };
    export { getDefaultDropdownDefinitions };
    export { warnInvalidStyle };
    export { DEFAULT_OPTIONS };
    export { DEFAULT_ICONS };
    export { DEFAULT_DROPDOWN_DEFINITIONS };
}
export default _default;
declare function normalizeStyles(config: any): any;
declare function getDefaultStylesConfiguration(isBlockPluginLoaded: any, isInlinePluginLoaded: any): {
    options: string[];
} | {
    options?: undefined;
};
declare function getDefaultDropdownDefinitions(pluginCollection: any): {
    name: string;
    title: string;
    defaultItem: string;
    items: string[];
}[];
declare function warnInvalidStyle(info: any): void;
declare namespace DEFAULT_OPTIONS {
    namespace inline {
        export const name: string;
        export const title: string;
        export { objectInline as icon };
        export const modelElements: string[];
        export const isDefault: boolean;
    }
    namespace alignLeft {
        const name_1: string;
        export { name_1 as name };
        const title_1: string;
        export { title_1 as title };
        export { objectLeft as icon };
        const modelElements_1: string[];
        export { modelElements_1 as modelElements };
        export const className: string;
    }
    namespace alignBlockLeft {
        const name_2: string;
        export { name_2 as name };
        const title_2: string;
        export { title_2 as title };
        export { objectBlockLeft as icon };
        const modelElements_2: string[];
        export { modelElements_2 as modelElements };
        const className_1: string;
        export { className_1 as className };
    }
    namespace alignCenter {
        const name_3: string;
        export { name_3 as name };
        const title_3: string;
        export { title_3 as title };
        export { objectCenter as icon };
        const modelElements_3: string[];
        export { modelElements_3 as modelElements };
        const className_2: string;
        export { className_2 as className };
    }
    namespace alignRight {
        const name_4: string;
        export { name_4 as name };
        const title_4: string;
        export { title_4 as title };
        export { objectRight as icon };
        const modelElements_4: string[];
        export { modelElements_4 as modelElements };
        const className_3: string;
        export { className_3 as className };
    }
    namespace alignBlockRight {
        const name_5: string;
        export { name_5 as name };
        const title_5: string;
        export { title_5 as title };
        export { objectBlockRight as icon };
        const modelElements_5: string[];
        export { modelElements_5 as modelElements };
        const className_4: string;
        export { className_4 as className };
    }
    namespace block {
        const name_6: string;
        export { name_6 as name };
        const title_6: string;
        export { title_6 as title };
        export { objectCenter as icon };
        const modelElements_6: string[];
        export { modelElements_6 as modelElements };
        const isDefault_1: boolean;
        export { isDefault_1 as isDefault };
    }
    namespace side {
        const name_7: string;
        export { name_7 as name };
        const title_7: string;
        export { title_7 as title };
        export { objectRight as icon };
        const modelElements_7: string[];
        export { modelElements_7 as modelElements };
        const className_5: string;
        export { className_5 as className };
    }
}
declare namespace DEFAULT_ICONS {
    export { objectFullWidth as full };
    export { objectBlockLeft as left };
    export { objectBlockRight as right };
    export { objectCenter as center };
    export { objectLeft as inlineLeft };
    export { objectRight as inlineRight };
    export { objectInline as inline };
}
declare const DEFAULT_DROPDOWN_DEFINITIONS: {
    name: string;
    title: string;
    defaultItem: string;
    items: string[];
}[];
declare const objectInline: string;
declare const objectLeft: string;
declare const objectBlockLeft: string;
declare const objectCenter: string;
declare const objectRight: string;
declare const objectBlockRight: string;
declare const objectFullWidth: string;
