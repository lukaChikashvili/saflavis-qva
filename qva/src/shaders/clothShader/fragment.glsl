varying vec2 vUv;
uniform sampler2D uTexture;

void main() {
   
   vec4 color = texture(uTexture, vUv);
   gl_FragColor = color;
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}