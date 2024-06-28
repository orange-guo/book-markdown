"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[9632],{68948:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(74848),a=r(28453);const o={authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},i="springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",s={permalink:"/zh-CN/blog/2023/02/22/springdoc-v2-parameter-object",source:"@site/blog/2023-02-22/springdoc-v2-parameter-object.md",title:"springdoc-v2\u4e2d\u5728\u4e0d\u914d\u7f6e@ParameterObject\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0Pageable\u4ee5\u53caSort\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362",description:"springdoc\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210API\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86UI\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",date:"2023-02-22T00:00:00.000Z",tags:[{inline:!0,label:"springdoc",permalink:"/zh-CN/blog/tags/springdoc"},{inline:!0,label:"spring",permalink:"/zh-CN/blog/tags/spring"}],readingTime:4.98,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["springdoc","spring"]},unlisted:!1,prevItem:{title:"\u5e38\u89c1\u7684\u547d\u540d\u524d\u7f00",permalink:"/zh-CN/blog/2023/02/23/naming-pattern-prefix"},nextItem:{title:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u6570\u7ec4\u5230\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",permalink:"/zh-CN/blog/2023/02/21/inject-environment-as-array-into-spring-application"}},c={authorsImageUrls:[void 0]},d=[{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"@ParameterObject",id:"parameterobject",level:3},{value:"HandlerMethod",id:"handlermethod",level:3},{value:"MethodParameter",id:"methodparameter",level:3},{value:"HandlerMapping",id:"handlermapping",level:3},{value:"BeanPostProcessor",id:"beanpostprocessor",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u65b0\u589e<code>AppendSpringdocAnnotationBeanPostProcessor</code>\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0<code>@ParameterObject</code>\u6ce8\u89e3\u7684\u80fd\u529b",id:"\u65b0\u589eappendspringdocannotationbeanpostprocessor\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0parameterobject\u6ce8\u89e3\u7684\u80fd\u529b",level:3},{value:"\u65b0\u589e<code>@ParameterObject</code>\u7684\u5b9e\u73b0\u7c7b, \u7531\u4e8e<code>kotlin</code>\u4e0d\u652f\u6301\u7ee7\u627f<code>annotation</code>, \u9700\u8981\u65b0\u5efa<code>java</code>\u7c7b\u6765\u7ee7\u627f<code>annotation</code>",id:"\u65b0\u589eparameterobject\u7684\u5b9e\u73b0\u7c7b-\u7531\u4e8ekotlin\u4e0d\u652f\u6301\u7ee7\u627fannotation-\u9700\u8981\u65b0\u5efajava\u7c7b\u6765\u7ee7\u627fannotation",level:3},{value:"\u65b0\u589eConfiguration, \u5c06<code>AppendSpringdocAnnotationBeanPostProcessor</code>\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",id:"\u65b0\u589econfiguration-\u5c06appendspringdocannotationbeanpostprocessor\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"\u53cd\u5c04",id:"\u53cd\u5c04",level:3},{value:"<code>springdoc</code>\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed",id:"springdoc\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"springdoc-v2",id:"springdoc-v2",level:3},{value:"spring",id:"spring",level:3},{value:"kotlin",id:"kotlin",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"springdoc"}),"\u662f\u4e00\u4e2a\u53ef\u4ee5\u5feb\u901f\u751f\u6210",(0,t.jsx)(n.code,{children:"API"}),"\u6587\u6863\u7684\u7b2c\u4e09\u65b9\u516c\u5171\u5e93, \u5e76\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"UI"}),"\u9875\u9762\u4ee5\u4f9b\u8bbf\u95ee.",(0,t.jsx)("br",{}),"\n\u540c\u65f6\u5b83\u4e5f\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"spring-webmvc"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"handler"}),"\u4e2d\u7684\u53c2\u6570\u5bf9\u8c61\u5230",(0,t.jsx)(n.code,{children:"API"}),"\u53c2\u6570\u7684\u8f6c\u6362.",(0,t.jsx)("br",{}),"\n\u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"spring-data-commons"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"Pageable"}),"\u548c",(0,t.jsx)(n.code,{children:"Sort"}),", ",(0,t.jsx)(n.code,{children:"springdoc"}),"\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd,\n\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u4ee5\u53ca\u5728\u53c2\u6570\u4e2d\u58f0\u660e",(0,t.jsx)(n.code,{children:"@ParameterObject"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="application.yml"',children:"springdoc:\n  model-converters:\n    pageable-converter:\n      enabled: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5df2\u7ecf\u5b58\u5728\u7684\u9879\u76ee, \u5f53\u521a\u5f15\u5165",(0,t.jsx)(n.code,{children:"springdoc"}),"\u65f6, \u9700\u8981\u914d\u7f6e\u5927\u91cf\u7684",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u6ce8\u89e3\u4ee5\u5b9e\u73b0\u53c2\u6570\u8f6c\u6362\u529f\u80fd.",(0,t.jsx)("br",{}),"\n\u8fd9\u4e2a\u8fc7\u7a0b\u901a\u5e38\u6bd4\u8f83\u7e41\u7410, \u56e0\u4e3a\u5bf9\u4e8e\u4e00\u4e2a\u5177\u6709\u4e00\u5b9a\u89c4\u6a21\u7684\u9879\u76ee\u800c\u8a00, \u5176\u5bf9\u5916\u63d0\u4f9b\u7684",(0,t.jsx)(n.code,{children:"API"}),"\u5f80\u5f80\u4f1a\u975e\u5e38\u591a,\n\u9700\u8981\u8fdb\u884c\u5927\u91cf\u7684\u4fee\u6539\u529f\u80fd\u624d\u80fd\u5b9e\u73b0\u8be5\u529f\u80fd",(0,t.jsx)("br",{}),"\n\u90a3\u4e48\u6b64\u65f6\u6211\u4eec\u9700\u8981\u4e00\u79cd\u89e3\u51b3\u65b9\u6848, \u5373\u5982\u4f55\u5728\u4e0d\u914d\u7f6e",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"Pageable"}),"\u4ee5\u53ca",(0,t.jsx)(n.code,{children:"Sort"}),"\u5bf9\u8c61\u5230API\u53c2\u6570\u7684\u8f6c\u6362"]}),"\n",(0,t.jsx)(n.h2,{id:"\u601d\u8def",children:"\u601d\u8def"}),"\n",(0,t.jsx)(n.h3,{id:"parameterobject",children:"@ParameterObject"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"springdoc"}),"\u4e2d, ",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u6ce8\u89e3\u7684\u83b7\u53d6\u662f\u6765\u81ea\u4e8e",(0,t.jsx)(n.code,{children:"spring-webmvc"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"HandlerMethod"}),"\u5bf9\u8c61"]}),"\n",(0,t.jsx)(n.h3,{id:"handlermethod",children:"HandlerMethod"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u5bf9\u8c61\u662f\u6211\u4eec\u5728",(0,t.jsx)(n.code,{children:"Controller"}),"\u4e2d\u58f0\u660e\u7684",(0,t.jsx)(n.code,{children:"Handler"}),"\u7684\u62bd\u8c61, \u5b83\u4e3b\u8981\u4fdd\u5b58\u4e86\u6211\u4eec\u58f0\u660e\u7684",(0,t.jsx)(n.code,{children:"Handler"}),"\u7684\u4e00\u4e9b\u5143\u4fe1\u606f. ",(0,t.jsx)("br",{}),"\n\u5b83\u7684",(0,t.jsx)(n.code,{children:"MethodParameter[] parameters"}),"\u5c5e\u6027\u5305\u542b\u4e86\u8be5\u65b9\u6cd5\u7684\u6240\u6709\u53c2\u6570\u7684\u4fe1\u606f.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"methodparameter",children:"MethodParameter"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MethodParameter"}),"\u5bf9\u8c61\u7684",(0,t.jsx)(n.code,{children:"Annotation[] parameterAnnotations"}),"\u5c5e\u6027\u5305\u542b\u4e86\u8be5\u53c2\u6570\u7684\u6240\u6709\u6ce8\u89e3.",(0,t.jsx)("br",{}),"\n\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539",(0,t.jsx)(n.code,{children:"Annotation[] parameterAnnotations"}),"\u5c5e\u6027\u4ee5\u5b9e\u73b0\u52a8\u6001\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u6ce8\u89e3\u7684\u529f\u80fd.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"handlermapping",children:"HandlerMapping"}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u4ece",(0,t.jsx)(n.code,{children:"spring"}),"\u5bb9\u5668\u4e2d\u83b7\u53d6\u5230",(0,t.jsx)(n.code,{children:"MethodHandler"}),", \u56e0\u4e3a\u5176\u662f\u4fdd\u5b58\u5728",(0,t.jsx)(n.code,{children:"HandlerMapping"}),"\u4e2d\u7684, ",(0,t.jsx)(n.code,{children:"HandlerMapping"}),"\n\u53ef\u4ee5\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6\u5230.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h3,{id:"beanpostprocessor",children:"BeanPostProcessor"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"spring"}),"\u4e2d\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"BeanPostProcess"}),"\u673a\u5236, \u4e3b\u8981\u5b9e\u73b0\u4e86\u5bf9",(0,t.jsx)(n.code,{children:"Bean"}),"\u7684\u521b\u5efa\u8fdb\u884c\u62e6\u622a\u5904\u7406.",(0,t.jsx)("br",{}),"\n\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"BeanPostProcessor"}),"\u6765\u5bf9",(0,t.jsx)(n.code,{children:"HandlerMapping"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"MethodHandler"}),"\u4e2d\u7684",(0,t.jsx)(n.code,{children:"MethodParameter"}),"\u7684",(0,t.jsx)(n.code,{children:"parameterAnnotations"}),"\n\u8fdb\u884c\u4fee\u6539\u4ee5\u5b9e\u73b0\u8ffd\u52a0",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u6ce8\u89e3"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,t.jsxs)(n.h3,{id:"\u65b0\u589eappendspringdocannotationbeanpostprocessor\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0parameterobject\u6ce8\u89e3\u7684\u80fd\u529b",children:["\u65b0\u589e",(0,t.jsx)(n.code,{children:"AppendSpringdocAnnotationBeanPostProcessor"}),"\u7528\u4e8e\u5b9e\u73b0\u589e\u52a0",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u6ce8\u89e3\u7684\u80fd\u529b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="AppendSpringdocAnnotationBeanPostProcessor.kt"',children:'/**\n * We must add @ParameterObject annotation to Pageable and Sort parameter to ensure that springdoc can generate correct.\n * But declaring @ParameterObject in the controller method is not a good idea, because it will take some time to.\n * So we can use this class to avoid declaring @ParameterObject on method parameter which type is Pageable or Sort.\n *\n * @author Xiangcheng.Kuo\n * @see org.springdoc.core.annotations.ParameterObject\n * @see <a href="https://springdoc.org/v2/#how-can-i-map-pageable-spring-data-commons-object-to-correct-url-parameter-in-swagger-ui">13.22. How can I map Pageable (spring-data-commons) object to correct URL-Parameter in Swagger UI?</a>\n */\ninternal class AppendSpringdocAnnotationBeanPostProcessor : BeanPostProcessor {\n\n\toverride fun postProcessAfterInitialization(bean: Any, beanName: String): Any {\n\t\tif (bean !is AbstractHandlerMethodMapping<*>) {\n\t\t\treturn bean\n\t\t}\n\t\tbean.handlerMethods?.forEach { (_: Any, handlerMethod: HandlerMethod) ->\n\t\t\thandlerMethod\n\t\t\t\t.methodParameters\n\t\t\t\t.filter {\n\t\t\t\t\tPageable::class.java.isAssignableFrom(it.parameterType) || Sort::class.java.isAssignableFrom(it.parameterType)\n\t\t\t\t}.forEach { methodParameter: MethodParameter ->\n\t\t\t\t\taddAnnotationForParameter(methodParameter)\n\t\t\t\t}\n\t\t}\n\t\treturn bean\n\t}\n\n\tprivate fun addAnnotationForParameter(methodParameter: MethodParameter) {\n\t\tval parameterAnnotationsField =\n\t\t\tFieldUtils.getDeclaredField(MethodParameter::class.java, "parameterAnnotations", true)\n\t\tval annotations: MutableList<Annotation> =\n\t\t\t((parameterAnnotationsField[methodParameter] as Array<Annotation>?)\n\t\t\t\t?: emptyArray<Annotation>()).toMutableList()\n\n\t\tif (annotations.stream().anyMatch(ParameterObject::class::isInstance)) {\n\t\t\treturn\n\t\t}\n\n\t\tannotations.add(FakeParameterObject.create())\n\t\tparameterAnnotationsField[methodParameter] = annotations.toTypedArray()\n\t}\n\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"\u65b0\u589eparameterobject\u7684\u5b9e\u73b0\u7c7b-\u7531\u4e8ekotlin\u4e0d\u652f\u6301\u7ee7\u627fannotation-\u9700\u8981\u65b0\u5efajava\u7c7b\u6765\u7ee7\u627fannotation",children:["\u65b0\u589e",(0,t.jsx)(n.code,{children:"@ParameterObject"}),"\u7684\u5b9e\u73b0\u7c7b, \u7531\u4e8e",(0,t.jsx)(n.code,{children:"kotlin"}),"\u4e0d\u652f\u6301\u7ee7\u627f",(0,t.jsx)(n.code,{children:"annotation"}),", \u9700\u8981\u65b0\u5efa",(0,t.jsx)(n.code,{children:"java"}),"\u7c7b\u6765\u7ee7\u627f",(0,t.jsx)(n.code,{children:"annotation"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="FakeParameterObject.java"',children:'/**\n * Avoid the following kotlin compile error\n * This type has a constructor, and thus must be initialized here\n * This type is final, so it cannot be inherited from\n *\n * @author Xiangcheng.Kuo\n * @see <a href="https://stackoverflow.com/questions/51608924/implement-inherit-extend-annotation-in-kotlin">Implement (/inherit/~extend) annotation in Kotlin</a>\n */\npublic class FakeParameterObject implements ParameterObject {\n\n\t@Override\n\tpublic Class<? extends Annotation> annotationType() {\n\t\treturn FakeParameterObject.class;\n\t}\n\n\tpublic static ParameterObject create() {\n\t\treturn new FakeParameterObject();\n\t}\n\n}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"\u65b0\u589econfiguration-\u5c06appendspringdocannotationbeanpostprocessor\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d",children:["\u65b0\u589eConfiguration, \u5c06",(0,t.jsx)(n.code,{children:"AppendSpringdocAnnotationBeanPostProcessor"}),"\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="ApidocAutoConfiguration.kt"',children:"/**\n * @author Xiangcheng.Kuo\n */\n@Configuration\ninternal class ApidocAutoConfiguration {\n\n\t@Bean\n\t@ConditionalOnProperty(Constants.SPRINGDOC_ENABLED, matchIfMissing = true)\n\tfun appendSpringdocAnnotationBeanPostProcessor(): BeanPostProcessor =\n\t\tAppendSpringdocAnnotationBeanPostProcessor()\n\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,t.jsx)(n.h3,{id:"\u53cd\u5c04",children:"\u53cd\u5c04"}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5\u89e3\u51b3\u65b9\u6cd5\u662f\u57fa\u4e8e\u53cd\u5c04\u7684, \u5e76\u4e14\u5728",(0,t.jsx)(n.code,{children:"spring"}),"\u7684",(0,t.jsx)(n.code,{children:"BeanPostProcessor"}),"\u4e2d\u4fee\u6539\u4e86",(0,t.jsx)(n.code,{children:"MethodParameter"}),"\u7684",(0,t.jsx)(n.code,{children:"parameterAnnotations"}),"\u5c5e\u6027.\n\u8be5\u5c5e\u6027\u53ef\u80fd\u4f1a\u5728",(0,t.jsx)(n.code,{children:"spring"}),"\u7684\u5176\u4ed6\u5730\u65b9\u88ab\u4f7f\u7528, \u56e0\u6b64\u53ef\u80fd\u4f1a\u5f15\u8d77\u4e00\u4e9b\u4e0d\u53ef\u9884\u77e5\u7684\u95ee\u9898."]}),"\n",(0,t.jsxs)(n.h3,{id:"springdoc\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed",children:[(0,t.jsx)(n.code,{children:"springdoc"}),"\u5e94\u8be5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5173\u95ed"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u751f\u4ea7\u73af\u5883\u4e2d, \u4e0d\u5e94\u8be5\u5f00\u542f",(0,t.jsx)(n.code,{children:"springdoc"}),", \u56e0\u4e3a\u8fd9\u4f1a\u66b4\u9732",(0,t.jsx)(n.code,{children:"swagger"}),"\u7684",(0,t.jsx)(n.code,{children:"api"}),"\u6587\u6863, \u4ece\u800c\u5bfc\u81f4",(0,t.jsx)(n.code,{children:"api"}),"\u6587\u6863\u6cc4\u9732,"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"spring"}),"\u4e2d\u63d0\u4f9b\u7684",(0,t.jsx)(n.code,{children:"profile"}),"\u529f\u80fd\u4ee5\u5b9e\u73b0\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5f00\u542f",(0,t.jsx)(n.code,{children:"springdoc"}),", \u751f\u4ea7\u6a21\u5f0f\u4e0b\u5173\u95ed",(0,t.jsx)(n.code,{children:"springdoc"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="application.yml"',children:"springdoc:\n  api-docs:\n    enabled: false\n  model-converters:\n    pageable-converter:\n      enabled: true\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="application-dev.yml"',children:"springdoc:\n  api-docs:\n    enabled: true\n  model-converters:\n    pageable-converter:\n      enabled: true\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsx)(n.h3,{id:"springdoc-v2",children:"springdoc-v2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://springdoc.org/v2/",children:"springdoc v2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://springdoc.org/v2/#how-can-i-map-pageable-spring-data-commons-object-to-correct-url-parameter-in-swagger-ui",children:"13.22. How can I map Pageable (spring-data-commons) object to correct URL-Parameter in Swagger UI?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://springdoc.org/v2/#how-can-i-extract-fields-from-parameter-object",children:"13.61. How can I extract fields from parameter object ?"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"spring",children:"spring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/method/HandlerMethod.html",children:"Class HandlerMethod"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/MethodParameter.html",children:"Class MethodParameter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/HandlerMapping.html",children:"Interface HandlerMapping"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/config/BeanPostProcessor.html",children:"Interface BeanPostProcessor"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"kotlin",children:"kotlin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/51608924/implement-inherit-extend-annotation-in-kotlin",children:"Implement (/inherit/~extend) annotation in Kotlin"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(96540);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);