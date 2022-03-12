function encodeSvg(svgString) {
  return svgString.replace('<svg', (~svgString.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))

    //
    //   Encode (may need a few extra replacements)
    //
    .replace(/"/g, '\'')
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')

    .replace(/\s+/g, ' ')
    // 
    //    The maybe list (add on documented fail)
    // 
    //  .replace(/&/g, '%26')
    //  .replace('|', '%7C')
    //  .replace('[', '%5B')
    //  .replace(']', '%5D')
    //  .replace('^', '%5E')
    //  .replace('`', '%60')
    //  .replace(';', '%3B')
    //  .replace('?', '%3F')
    //  .replace(':', '%3A')
    //  .replace('@', '%40')
    //  .replace('=', '%3D')
    ;
}

const url = encodeSvg(`
  <svg width="150px" height="100px" viewBox="0 0 600 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">

      <rect fill="#FFFFFF" x="0" y="0" width="600" height="400" />
      <rect data-type="bg" x="0" y="161" width="600" height="239" fill="#2B2A6F" />

      <g transform="translate(419, 203)">
        <rect x="0" y="0" width="156" height="156" rx="6" fill="#FFF" />
        <g transform="translate(8,8)">
          <image x="0" y="0" width="140" height="140" data-type="qr" xlink:href=""/>
        </g>
      </g>
      
      <g transform="translate(34, 34)">
        <rect x="0" y="0" width="48" height="48" fill="#FFF" />
        <image x="0" y="0" width="48" height="48" data-type="logo" xlink:href="" />
      </g>

      <text font-family="微软雅黑" font-size="44" font-weight="500" fill="#000000" >
        <tspan x="111" y="77" data-type="title" data-max="73" data-len="10">???????</tspan>
        <tspan x="111" y="77" data-type="title-placeholder" data-max="73" fill="transparent">.</tspan>
      </text>

      <text font-family="微软雅黑" font-size="20" font-weight="normal" fill="#5D5E67">
        <tspan x="111" y="127" data-type="subTitle" data-max="77" data-len="23">??????????</tspan>
        <tspan x="111" y="127" data-type="subTitle-placeholder" data-max="77" fill="transparent">.</tspan>
      </text>

      <g transform="translate(33, 187)" fill="#FFFFFF" font-family="微软雅黑" font-size="20">

        <text>
          <tspan x="0" y="101" data-type="field" data-len="18" data-max="60" data-count="1"></tspan>
          <tspan x="0" y="101" data-type="field-placeholder1" data-max="60" fill="transparent">.</tspan>
        </text>

        <text>
          <tspan x="0" y="61" data-type="field" data-len="18" data-max="60" data-count="2"></tspan>
          <tspan x="0" y="61" data-type="field-placeholder2" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="141" data-type="field" data-len="18" data-max="60" data-count="2"></tspan>
          <tspan x="0" y="141" data-type="field-placeholder2" data-max="60" fill="transparent">.</tspan>
        </text>

        <text>
          <tspan x="0" y="41" data-type="field" data-len="18" data-max="60" data-count="3"></tspan>
          <tspan x="0" y="41" data-type="field-placeholder3" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="101" data-type="field" data-len="18" data-max="60" data-count="3"></tspan>
          <tspan x="0" y="101" data-type="field-placeholder3" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="161" data-type="field" data-len="18" data-max="60" data-count="3"></tspan>
          <tspan x="0" y="161" data-type="field-placeholder3" data-max="60" fill="transparent">.</tspan>
        </text>

        <text>
          <tspan x="0" y="30" data-type="field" data-len="18" data-max="60" data-count="4"></tspan>
          <tspan x="0" y="30" data-type="field-placeholder4" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="80" data-type="field" data-len="18" data-max="60" data-count="4"></tspan>
          <tspan x="0" y="80" data-type="field-placeholder4" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="130" data-type="field" data-len="18" data-max="60" data-count="4"></tspan>
          <tspan x="0" y="130" data-type="field-placeholder4" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="180" data-type="field" data-len="18" data-max="60" data-count="4"></tspan>
          <tspan x="0" y="180" data-type="field-placeholder4" data-max="60" fill="transparent">.</tspan>
        </text>

        <text>
          <tspan x="0" y="21" data-type="field" data-len="18" data-max="60" data-count="5">??????????</tspan>
          <tspan x="0" y="21" data-type="field-placeholder5" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="61" data-type="field" data-len="18" data-max="60" data-count="5">??????????</tspan>
          <tspan x="0" y="61" data-type="field-placeholder5" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="101" data-type="field" data-len="18" data-max="60" data-count="5">??????????</tspan>
          <tspan x="0" y="101" data-type="field-placeholder5" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="141" data-type="field" data-len="18" data-max="60" data-count="5">??????????</tspan>
          <tspan x="0" y="141" data-type="field-placeholder5" data-max="60" fill="transparent">.</tspan>
        </text>
        <text>
          <tspan x="0" y="181" data-type="field" data-len="18" data-max="60" data-count="5">??????????</tspan>
          <tspan x="0" y="181" data-type="field-placeholder5" data-max="60" fill="transparent">.</tspan>
        </text>
      </g>
    </g>
  </svg>
`)

const img = new Image()
img.src = 'data:image/svg+xml;utf8,' + url
document.body.append(img)