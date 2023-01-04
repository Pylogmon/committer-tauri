import React, { useState } from 'react';
import { Grid, Autocomplete, TextField, Button } from '@mui/material';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

// bug类型列表
const typeList = [
    'baselineedition', 'docerror', 'reliable', 'compatible', 'modifyimport', 'codeerror', 'config', 'install', 'security', 'performance', 'standard', 'designdefect', 'system', 'app', 'desktop', 'kernel', 'newfeature', 'page_display', 'experience', 'function', 'interface', 'operation_prompt', 'not_involve'
];
// 操作系统列表
const osList = [
    'ios', 'android', 'deepin', 'uos', 'all', 'windows', 'others'
];
// 浏览器列表
const browserList = [
    'uos', 'all', 'ie', 'chrome', 'firefox', 'other'
];
// 严重程度列表
const severityList = [
    { label: '无影响', value: 1 },
    { label: '一般', value: 2 },
    { label: '严重', value: 3 },
    { label: '非常严重', value: 4 }
];
// 优先级列表
const priList = [0, 1, 2, 3, 4];

// 下拉列表封装
function ComboBox(props) {
    const { options, label, onChange } = props;
    return <Autocomplete
        fullWidth
        size='small'
        options={options}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label={label} />}
    />
}
function getValue(v) {
    console.log(v)
}
export default function Editor() {
    const [product, setProduct] = useState('')
    const [project, setProject] = useState('')
    const [module, setModule] = useState('')
    const [branch, setBranch] = useState('')
    const [severity, setSeverity] = useState('')
    const [type, setType] = useState('')
    const [pri, setPri] = useState('')
    const [assigned, setAssigned] = useState('')
    const [os, setOs] = useState('')
    const [browser, setBrowser] = useState('')
    const [title, setTitle] = useState('')
    const [keywords, setKeywords] = useState('')
    const [content, setContent] = useState('')
    const [sendto, setSendto] = useState('')

    let state = { product, project, module, branch, severity, type, pri, assigned, os, browser, title, keywords, content, sendto }

    return (
        <Grid item xs container sx={{ height: '100%' }} direction='column'>
            <Grid item xs sx={{ overflow: 'auto' }}>
                <Grid container spacing={2} sx={{ padding: '8px' }}>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} onChange={(e, v) => setProduct(v)} label="产品" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} onChange={(e, v) => setProject(v)} label="项目" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} onChange={(e, v) => setModule(v)} label="模块" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} onChange={(e, v) => setBranch(v)} label="分支" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} onChange={(e, v) => setType(v)} label="类型" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={severityList} onChange={(e, v) => setSeverity(v)} label="严重程度" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={priList} onChange={(e, v) => setPri(v)} label="优先级" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} onChange={(e, v) => setAssigned(v)} label="指派给" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={osList} onChange={(e, v) => setOs(v)} label="操作系统" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={browserList} onChange={(e, v) => setBrowser(v)} label="浏览器" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} label="草稿箱" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <ComboBox options={typeList} label="模板" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth size='small' onChange={e => setTitle(e.target.value)} label='标题' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth size='small' onChange={e => setKeywords(e.target.value)} label='关键字' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline size='small' rows={6} onChange={e => setContent(e.target.value)} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={2} sx={{ padding: '8px' }}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField fullWidth size='small' onChange={e => setSendto(e.target.value)} label='抄送' />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Button fullWidth variant='outlined' startIcon={<SaveAsOutlinedIcon />}>保存为草稿</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Button fullWidth variant='outlined' startIcon={<InsertDriveFileOutlinedIcon />} >保存为模板</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Button fullWidth variant='contained' startIcon={<FileUploadOutlinedIcon />} >提交工单</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
