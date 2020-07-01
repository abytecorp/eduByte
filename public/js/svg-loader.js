const svgWrap = document.createElement('div'),
    svgData = `
<!-- SVG TWITCH -->
<svg style="display: none;">
    <symbol id="svg-logo-white" viewBox="0 0 18 18" preserveAspectRatio="xMinYMin meet">
        <path d="M150 0 L75 200 L225 200 Z" />
    </symbol>
</svg>
<!-- /SVG TWITCH -->
`;

svgWrap.innerHTML = svgData;
document.body.appendChild(svgWrap);

