var u=Object.create;var r=Object.defineProperty,W=Object.defineProperties,b=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,H=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var a=(i,t,o)=>t in i?r(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,f=(i,t)=>{for(var o in t||(t={}))l.call(t,o)&&a(i,o,t[o]);if(p)for(var o of p(t))w.call(t,o)&&a(i,o,t[o]);return i},g=(i,t)=>W(i,h(t)),d=i=>r(i,"__esModule",{value:!0});var T=(i,t)=>{d(i);for(var o in t)r(i,o,{get:t[o],enumerable:!0})},C=(i,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of y(t))!l.call(i,e)&&e!=="default"&&r(i,e,{get:()=>t[e],enumerable:!(o=b(t,e))||o.enumerable});return i},m=i=>C(d(r(i!=null?u(H(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i);T(exports,{ContentHeading:()=>D});var n=m(require("react"));var s=m(require("@neon-district/system")),x=(0,s.default)("div")(({theme:i})=>({display:"flex",flexDirection:"column",gap:i.spaces[2]})),S=(0,s.default)("h3")(({theme:i})=>({display:"inline-flex",gap:i.spaces[2],alignItems:"center",fontFamily:"Titillium Web",fontWeight:i.fontWeights.medium,fontSize:i.fontSizes.lg,lineHeight:"24px",margin:0,letterSpacing:"0.05em",textTransform:"uppercase",color:i.colors.white,[`@media (max-width: ${i.breakpoints.md})`]:{fontSize:i.fontSizes.md,lineHeight:"20px",letterSpacing:"0.1em"},svg:{color:i.colors.white,fontSize:"19px",[`@media (max-width: ${i.breakpoints.md})`]:{fontSize:"13px"}}})),z=(0,s.default)("p")(({theme:i,line:t})=>g(f({fontFamily:"Titillium Web",fontSize:i.fontSizes.md,fontWeight:i.fontWeights.medium,lineHeight:"24px",color:i.colors.grey3,textTransform:"uppercase",letterSpacing:"0.03em",margin:0},t&&{borderLeft:`2px solid ${i.colors.white}`,paddingLeft:"1rem"}),{[`@media (max-width: ${i.breakpoints.md})`]:{fontSize:i.fontSizes.sm,lineHeight:"20px",fontWeight:i.fontWeights.normal,letterSpacing:0}}));var v=()=>n.default.createElement("svg",{width:"1rem",height:"1rem",focusable:"false","aria-hidden":"true"},n.default.createElement("path",{fill:"currentColor",d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})),D=({title:i,description:t,info:o,line:e=!0})=>n.default.createElement(x,null,n.default.createElement(S,null,i,o&&n.default.createElement(v,null)),t&&n.default.createElement(z,{line:e},t));0&&(module.exports={ContentHeading});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vaW5kZXgudHMiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvc3R5bGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICcuL3NyYyc7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGVzY3JpcHRpb24sIFRpdGxlLCBXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBJbmZvSWNvbiA9ICgpID0+IChcbiAgPHN2ZyB3aWR0aD1cIjFyZW1cIiBoZWlnaHQ9XCIxcmVtXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICBkPVwiTTggMTZBOCA4IDAgMSAwIDggMGE4IDggMCAwIDAgMCAxNnptLjkzLTkuNDEyLTEgNC43MDVjLS4wNy4zNC4wMjkuNTMzLjMwNC41MzMuMTk0IDAgLjQ4Ny0uMDcuNjg2LS4yNDZsLS4wODguNDE2Yy0uMjg3LjM0Ni0uOTIuNTk4LTEuNDY1LjU5OC0uNzAzIDAtMS4wMDItLjQyMi0uODA4LTEuMzE5bC43MzgtMy40NjhjLjA2NC0uMjkzLjAwNi0uMzk5LS4yODctLjQ3bC0uNDUxLS4wODEuMDgyLS4zODEgMi4yOS0uMjg3ek04IDUuNWExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCB0eXBlIENvbnRlbnRIZWFkaW5nUHJvcHMgPSB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKlxuICAgKiBAZGVmYXVsdCBgZmFsc2VcbiAgICovXG4gIGluZm8/OiBib29sZWFuO1xuICAvKipcbiAgICpcbiAgICogQGRlZmF1bHQgYHRydWVgXG4gICAqL1xuICBsaW5lPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQ29udGVudEhlYWRpbmcgY29tcG9uZW50XG4gKlxuICogQGRlc2NyaXB0aW9uIEEgY29tcG9uZW50IHRvIGRpc3BsYXkgYSB0aXRsZSBhbmQgZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRIZWFkaW5nID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBpbmZvLFxuICBsaW5lID0gdHJ1ZVxufTogQ29udGVudEhlYWRpbmdQcm9wcykgPT4gKFxuICA8V3JhcHBlcj5cbiAgICA8VGl0bGU+XG4gICAgICB7dGl0bGV9XG5cbiAgICAgIHtpbmZvICYmIDxJbmZvSWNvbiAvPn1cbiAgICA8L1RpdGxlPlxuXG4gICAge2Rlc2NyaXB0aW9uICYmIDxEZXNjcmlwdGlvbiBsaW5lPXtsaW5lfT57ZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj59XG4gIDwvV3JhcHBlcj5cbik7XG4iLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdAbmVvbi1kaXN0cmljdC9zeXN0ZW0nO1xuXG5pbXBvcnQgeyBDb250ZW50SGVhZGluZ1Byb3BzIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBnYXA6IHRoZW1lLnNwYWNlc1syXVxufSkpO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQoJ2gzJykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgZ2FwOiB0aGVtZS5zcGFjZXNbMl0sXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250RmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsXG4gIGZvbnRXZWlnaHQ6IHRoZW1lLmZvbnRXZWlnaHRzLm1lZGl1bSxcbiAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplcy5sZyxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICBtYXJnaW46IDAsXG4gIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcblxuICBbYEBtZWRpYSAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLm1kfSlgXToge1xuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubWQsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjFlbSdcbiAgfSxcbiAgc3ZnOiB7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9ycy53aGl0ZSxcbiAgICBmb250U2l6ZTogJzE5cHgnLFxuXG4gICAgW2BAbWVkaWEgKG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy5tZH0pYF06IHtcbiAgICAgIGZvbnRTaXplOiAnMTNweCdcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKCdwJyk8Q29udGVudEhlYWRpbmdQcm9wcz4oXG4gICh7IHRoZW1lLCBsaW5lIH0pID0+ICh7XG4gICAgZm9udEZhbWlseTogJ1RpdGlsbGl1bSBXZWInLFxuICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZXMubWQsXG4gICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubWVkaXVtLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXkzLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjAzZW0nLFxuICAgIG1hcmdpbjogMCxcblxuICAgIC4uLihsaW5lICYmIHtcbiAgICAgIGJvcmRlckxlZnQ6IGAycHggc29saWQgJHt0aGVtZS5jb2xvcnMud2hpdGV9YCxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMXJlbSdcbiAgICB9KSxcblxuICAgIFtgQG1lZGlhIChtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMubWR9KWBdOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVzLnNtLFxuICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUuZm9udFdlaWdodHMubm9ybWFsLFxuICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgIH1cbiAgfSlcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiczZCQUFBLGtDQ0FBLE1BQWtCLG9CQ0FsQixNQUFtQixvQ0FJTixFQUFVLGNBQU8sT0FBTyxDQUFDLENBQUUsV0FBYSxFQUNuRCxRQUFTLE9BQ1QsY0FBZSxTQUNmLElBQUssRUFBTSxPQUFPLE1BR1AsRUFBUSxjQUFPLE1BQU0sQ0FBQyxDQUFFLFdBQWEsRUFDaEQsUUFBUyxjQUNULElBQUssRUFBTSxPQUFPLEdBQ2xCLFdBQVksU0FDWixXQUFZLGdCQUNaLFdBQVksRUFBTSxZQUFZLE9BQzlCLFNBQVUsRUFBTSxVQUFVLEdBQzFCLFdBQVksT0FDWixPQUFRLEVBQ1IsY0FBZSxTQUNmLGNBQWUsWUFDZixNQUFPLEVBQU0sT0FBTyxPQUVuQixzQkFBc0IsRUFBTSxZQUFZLE9BQVEsQ0FDL0MsU0FBVSxFQUFNLFVBQVUsR0FDMUIsV0FBWSxPQUNaLGNBQWUsU0FFakIsSUFBSyxDQUNILE1BQU8sRUFBTSxPQUFPLE1BQ3BCLFNBQVUsUUFFVCxzQkFBc0IsRUFBTSxZQUFZLE9BQVEsQ0FDL0MsU0FBVSxZQUtILEVBQWMsY0FBTyxLQUNoQyxDQUFDLENBQUUsUUFBTyxVQUFZLEtBQ3BCLFdBQVksZ0JBQ1osU0FBVSxFQUFNLFVBQVUsR0FDMUIsV0FBWSxFQUFNLFlBQVksT0FDOUIsV0FBWSxPQUNaLE1BQU8sRUFBTSxPQUFPLE1BQ3BCLGNBQWUsWUFDZixjQUFlLFNBQ2YsT0FBUSxHQUVKLEdBQVEsQ0FDVixXQUFZLGFBQWEsRUFBTSxPQUFPLFFBQ3RDLFlBQWEsU0FaSyxFQWVuQixzQkFBc0IsRUFBTSxZQUFZLE9BQVEsQ0FDL0MsU0FBVSxFQUFNLFVBQVUsR0FDMUIsV0FBWSxPQUNaLFdBQVksRUFBTSxZQUFZLE9BQzlCLGNBQWUsTUR0RHJCLEdBQU0sR0FBVyxJQUNmLHdCQUFDLE1BQUQsQ0FBSyxNQUFNLE9BQU8sT0FBTyxPQUFPLFVBQVUsUUFBUSxjQUFZLFFBQzVELHdCQUFDLE9BQUQsQ0FDRSxLQUFLLGVBQ0wsRUFBRSx1UkErQkssRUFBaUIsQ0FBQyxDQUM3QixRQUNBLGNBQ0EsT0FDQSxPQUFPLE1BRVAsd0JBQUMsRUFBRCxLQUNFLHdCQUFDLEVBQUQsS0FDRyxFQUVBLEdBQVEsd0JBQUMsRUFBRCxPQUdWLEdBQWUsd0JBQUMsRUFBRCxDQUFhLEtBQU0sR0FBTyIsCiAgIm5hbWVzIjogW10KfQo=