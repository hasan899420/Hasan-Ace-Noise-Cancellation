const IS_DEV = process.env.APP_VARIANT;
module.exports = ({ config }) => {
  return {
    ...config,
    name: IS_DEV ? "HNC (Dev)" : "HNC",
    slug: "hasan-ace-noise-cancellation",
    version: '1.4.4',
    android: {
      ...config.android,
      package: IS_DEV
        ? "com.mdhasan.acenoisecancellation.dev"
        : "com.mdhasan.acenoisecancellation",
    },
  };
};
