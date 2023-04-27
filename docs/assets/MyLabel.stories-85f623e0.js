import{j as q}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const l=({label:t="No label",size:v="normal",allCaps:_=!1,color:S="primary",fontColor:E})=>q.jsx("span",{className:`label ${v} text-${S} ${_===!0?"text-capitalize":""}  `,style:{color:E},children:t});try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Es el texto a mostrar",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Es el tamaño del texto",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Indica si el texto se muestra en modo capitalize",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Es el color del texto",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Es el color de fuente personalizado",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI Components/MyLabel",component:l,tags:["autodocs"],argTypes:{label:{control:"text"},size:{options:["normal","h1","h2","h3"],control:{type:"select"}},allCaps:{options:[!0,!1]},color:{control:{type:"select"},options:["primary","secondary","tertiary"]},fontColor:{control:{type:"color"}}}},e={args:{label:"this is a basic label",size:"normal",allCaps:!1,color:"primary"}},a={args:{label:"this text is capitalized",size:"normal",allCaps:!0,color:"primary"}},r={args:{label:"This is a secondary label",size:"h3",color:"secondary"}},o={args:{label:"this is a tertiary text",color:"tertiary"}},s={args:{size:"h1",fontColor:"#778541"}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'this is a basic label',
    size: 'normal',
    allCaps: false,
    color: 'primary'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'this text is capitalized',
    size: 'normal',
    allCaps: true,
    color: 'primary'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'This is a secondary label',
    size: 'h3',
    color: 'secondary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'this is a tertiary text',
    color: 'tertiary'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,x,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    fontColor: '#778541'
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const L=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{a as AllCaps,e as Basic,s as CustomFontColor,r as Secondary,o as Tertiary,L as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-85f623e0.js.map
