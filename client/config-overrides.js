const { override, fixBabelImports, addLessLoader, useBabelRc } = require("customize-cra")
const { addReactRefresh } = require("customize-cra-react-refresh")

module.exports = override(
  useBabelRc(),
  fixBabelImports("antd", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  fixBabelImports("formik-antd", {
    libraryName: "formik-antd",
    style: "css",
    libraryDirectory: "es",
  }),
  addReactRefresh({ disableRefreshCheck: true }),
  // addLessLoader({
  //     javascriptEnabled: true,
  //     modifyVars: { '@primary-color': 'rgb(51,122,183)' },
  // }),
)
