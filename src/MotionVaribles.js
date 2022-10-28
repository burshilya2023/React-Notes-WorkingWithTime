export const ScaleMotion = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom) => ({
        scale: 1,
        opacity: 1,

    }),
};

export const VariantsHeight = {
    hidden: {
        height: 0,
        opacity: 0,
    },
    visible: (i) => ({
        height: "auto",
        opacity: 1,
    }),
};