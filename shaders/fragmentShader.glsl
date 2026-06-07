// shaders/fragmentShader.glsl
varying vec2 vUv;
varying float vElevation;
uniform float uColorChange;

void main() {
vec4 c1 = vec4(1.0, 0.7059, 0.9255, 1.0); // #FFB4EC
vec4 c2 = vec4(1.0, 0.9, 0.9725, 1.0); // #FFCFF8



vec4 c3=vec4(1.,.9216,.8588,1.);
vec4 c4=vec4(1.,.9886,.9451,1.);

float v=smoothstep(-.14,.14,vElevation);
vec4 color1=mix(c1,c2,v);
vec4 color2=mix(c3,c4,v);

vec4 final=mix(color1,color2,uColorChange);
gl_FragColor=final;
}
