// Configuration of commitlint to check commit message guidelines
// module.exports = {
//     extends: ["@commitlint/config-conventional"],
//     parserPreset: "conventional-changelog-conventionalcommits",
//     rules: {
//         "subject-max-length": [2, "always", 50],
//         "scope-enum": [
//             2,
//             "always",
//             [
//                 "deps",
//                 "devops"
//                 //TODO: extend me
//             ]
//         ]
//     }
// };


const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Resolve and load conventional-changelog-atom from node_modules.
     * Referenced packages must be installed
     */
    parserPreset: 'conventional-changelog-conventionalcommits',
    /*
     * Resolve and load @commitlint/format from node_modules.
     * Referenced package must be installed
     */
    rules: {
        "subject-max-length": [2, "always", 50],
        "scope-enum": [
            2,
            "always",
            [
                "deps",
                "devops"
                //TODO: extend me
            ]
        ]
    }
};
  
module.exports = Configuration;
