uniform float uHeight;
uniform vec2 uFrequency;
uniform float uTime;
varying vec2 vUv;


// function to rotate
vec2 rotate2D(vec2 value, float angle)
{
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}



void main() {

   vec4 modelPosition = modelMatrix * vec4(position, 1.0);

      float elevation = sin(modelPosition.x * uFrequency.x + uTime) * 
                        sin(modelPosition.z * uFrequency.y + uTime) * uHeight;

   modelPosition.y += elevation;

  float angle = modelPosition.x * 0.4;
  modelPosition.zy = rotate2D(modelPosition.zy, angle);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;     

    // varyings
    vUv = uv;
}