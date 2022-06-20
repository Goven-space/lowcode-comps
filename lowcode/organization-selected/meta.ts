
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const OrganizationSelectedMeta: ComponentMetadata = {
  "componentName": "OrganizationSelected",
  "title": "组织选择",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "react-comps",
    "version": "0.1.0",
    "exportName": "OrganizationSelected",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isMultiple",
            "zh-CN": "是否多选"
          },
          "tip":"isMultiple|是否多选"
        },
        "name": "isMultiple",
        "description":"是否多选",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "是",
                "value": true
              },
              {
                "label": "否",
                "value": false
              }
            ],
            "options": [
              {
                "label": "是",
                "value": true
              },
              {
                "label": "否",
                "value": false
              }
            ]
          },
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true,
      "events": [
        {
          "name":"onChange"
        }
      ]
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "OrganizationSelected",
    "screenshot": "",
    "schema": {
      "componentName": "OrganizationSelected",
      "props": {}
    }
  }
];

export default {
  ...OrganizationSelectedMeta,
  snippets
};
