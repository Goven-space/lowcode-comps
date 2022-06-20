import React, { useEffect, useState, createElement } from 'react';
import { TreeSelect } from 'antd';
import { getPersonnelRule } from '../../api/bpm';
import {  FolderOutlined, FolderOpenOutlined } from '@ant-design/icons';

export interface OrganizationSelectedProps {
    isMultiple?: false | true ;
    onChange?: (value: string, labelList: ReactNode[], extra: ChangeEventExtra) => void;
}

// const mock = [
//     {
//         label: "选项1",
//         value:"1"
//     },
//     {
//         label: "选项2",
//         value: "2"
//     },
//     {
//         label: "选项3",
//         value: "3"
//     }
// ]

const OrganizationSelected = (props: OrganizationSelectedProps) => {
    const [organizationList, setOrganizationList] = useState([])

    const { isMultiple, onChange } = props

    useEffect(() => {
        loadTreeData()
    }, [])

    const treeDataTransform = (data) => {
        const arr = data.map((item, index) => {
            return {
                value: item.id,
                title: item.text,
                OrgClass: item.OrgClass,
                id: item.id,
                isLeaf: item.state === 'open' && !item.children,
                icon: ({ isLeaf, expanded }) => !isLeaf && (expanded ? <FolderOpenOutlined /> : <FolderOutlined />),
                children: item.children && treeDataTransform(item.children)
            }
        })
        return arr
    }
    
    const updateTreeData = (list:object[],key:string, children?:object[]) => {
        return list.map((node) => {
            if (node?.value === key) {
                return { ...node, children: treeDataTransform(children) };
            }
            if (node.children) {
                return { ...node, children: updateTreeData(node.children, key, children) };
            }
            return node;
        });
    }

    const loadTreeData = (params:object, key:string, resolve) => {
        getPersonnelRule({ wf_num: 'R_S007_B007', ...params }).then(res => {
            const { data, status } = res;
            if (status === 200) {
                key ? setOrganizationList(origin => {
                    return updateTreeData(origin, key, data)
                }) :
                    setOrganizationList(treeDataTransform(data))
            }
            resolve && resolve()
        })
    }

    const onLoadData = (node) => {
        const {  isLeaf, children, id } = node
        return new Promise(resolve => {
            if (!isLeaf && !children) {
                loadTreeData({ id }, id, resolve)
            } else {
                resolve()
            }
        })
    }

    return (
        <TreeSelect
            multiple={isMultiple}
            treeLine
            showIcon
            // style={{width:'400px'}}
            treeData={organizationList}
            onChange={onChange}
            // loadData={(node) => onLoadData(node)}
        />
    );
}

export default OrganizationSelected;