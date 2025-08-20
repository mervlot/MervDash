import * as React from "react";
const SvgArc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1080"      // Use viewBox instead of fixed width/height
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    {...props}
  >
    <g clipPath="url(#arc_svg__a)">


      <g filter="url(#arc_svg__b)">
        <mask
          id="arc_svg__c"
          width={1920}
          height={1080}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <path fill="#0D0A13" d="M0 0h1920v1080H0z" />
        </mask>
        <g mask="url(#arc_svg__c)">
          <g
            filter="url(#arc_svg__d)"
            style={{
              mixBlendMode: "plus-lighter",
            }}
          >
            <circle
              cx={960}
              cy={1927}
              r={1681.5}
              stroke="#fff"
              strokeOpacity={0.5}
              strokeWidth={107}
            />
          </g>
          <mask
            id="arc_svg__e"
            width={3470}
            height={3470}
            x={-775}
            y={192}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "alpha",
            }}
          >
            <circle cx={960} cy={1927} r={1735} fill="#181624" />
          </mask>
          <g mask="url(#arc_svg__e)">
            <g filter="url(#arc_svg__f)">
              <path
                stroke="#4A22E5"
                strokeWidth={136}
                d="M960 321.911c744.2 0 1339.88 564.524 1339.88 1251.809 0 687.28-595.68 1251.81-1339.88 1251.81-744.199 0-1339.879-564.53-1339.879-1251.81 0-687.285 595.68-1251.809 1339.879-1251.809Z"
              />
            </g>
            <g filter="url(#arc_svg__g)">
              <path
                stroke="#A456FA"
                strokeWidth={166}
                d="M960.5 275C1864.28 275 2585 947.975 2585 1764c0 816.02-720.72 1489-1624.5 1489S-664 2580.02-664 1764C-664 947.975 56.72 275 960.5 275Z"
              />
            </g>
            <g
              filter="url(#arc_svg__h)"
              style={{
                mixBlendMode: "plus-lighter",
              }}
            >
              <circle
                cx={960}
                cy={1887}
                r={1695}
                stroke="#fff"
                strokeWidth={80}
              />
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="arc_svg__b"
        width={1928}
        height={896}
        x={-4}
        y={192}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11_80" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_11_80"
          result="shape"
        />
      </filter>
      <filter
        id="arc_svg__d"
        width={3670}
        height={3670}
        x={-875}
        y={92}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_11_80"
          stdDeviation={50}
        />
        <feTurbulence
          baseFrequency="1 1"
          numOctaves={3}
          result="noise"
          seed={8226}
          stitchTiles="stitch"
          type="fractalNoise"
        />
        <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            type="discrete"
          />
        </feComponentTransfer>
        <feComposite
          in="coloredNoise1"
          in2="effect1_foregroundBlur_11_80"
          operator="in"
          result="noise1Clipped"
        />
        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
        <feComposite
          in="color1Flood"
          in2="noise1Clipped"
          operator="in"
          result="color1"
        />
        <feMerge result="effect2_noise_11_80">
          <feMergeNode in="effect1_foregroundBlur_11_80" />
          <feMergeNode in="color1" />
        </feMerge>
      </filter>
      <filter
        id="arc_svg__f"
        width={3135.76}
        height={2959.62}
        x={-607.879}
        y={93.911}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_11_80"
          stdDeviation={80}
        />
        <feTurbulence
          baseFrequency="1 1"
          numOctaves={3}
          result="noise"
          seed={1721}
          stitchTiles="stitch"
          type="fractalNoise"
        />
        <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            type="discrete"
          />
        </feComponentTransfer>
        <feComposite
          in="coloredNoise1"
          in2="effect1_foregroundBlur_11_80"
          operator="in"
          result="noise1Clipped"
        />
        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
        <feComposite
          in="color1Flood"
          in2="noise1Clipped"
          operator="in"
          result="color1"
        />
        <feMerge result="effect2_noise_11_80">
          <feMergeNode in="effect1_foregroundBlur_11_80" />
          <feMergeNode in="color1" />
        </feMerge>
      </filter>
      <filter
        id="arc_svg__g"
        width={3575}
        height={3304}
        x={-827}
        y={112}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_11_80"
          stdDeviation={40}
        />
      </filter>
      <filter
        id="arc_svg__h"
        width={3666}
        height={3666}
        x={-873}
        y={54}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_11_80"
          stdDeviation={49}
        />
      </filter>
      <clipPath id="arc_svg__a">
        <path fill="#fff" d="M0 0h1920v1080H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArc;
