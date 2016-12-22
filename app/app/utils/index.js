const format = val =>
   val === undefined ? null : (typeof val === 'function') ? val() : val
export const conditional = statement =>
   (renderIfTrue, renderIfFalse) => statement ? format(renderIfTrue) : format(renderIfFalse)