module.exports = {
    "default": {
        "paths": [
            "src/tests/features"
        ],
        "dry-run": false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber_report.json",
            "html:reports/cucumber_report.html"
        ],
        "formatOptions": {
            "colorsEnabled": true,
            "snippetInterface": "async-await"
        },
        "require": [
            "src/tests/step-definitions/*.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ]
    }
}