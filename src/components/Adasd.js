import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"max-width": "240px",
	"padding": "50px 80px 80px 50px",
	"background": "--color-light",
	"color": "--dark"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"font": "--base",
			"color": "--grey",
			"letter-spacing": "1px",
			"text-transform": "uppercase",
			"margin": "6px 0",
			"children": "About me"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline2",
			"margin": "0 0 12px 0",
			"children": "Hey I’m David"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"children": "My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards."
		}
	}
}; //

const Adasd = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps); // console.log(props, '!!', override("text2"), '??', override("text").children);

	const {
		children: child,
		...rr
	} = override("text");
	console.log(rr, child);
	return <Box {...rest}>
		<div data-qparent={rr['data-qparent']} data-qkind={rr['data-qkind']} data-qoverride={rr['data-qoverride']}>
			{1}
		</div>
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		{children}
	</Box>;
};

Object.assign(Adasd, { ...Box,
	defaultProps,
	overrides
});
export default Adasd;