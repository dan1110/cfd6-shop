import React from 'react';
import { OutStory, Welcome, About, OutStoryCenter, Slogan, Images, Reviews, Social } from './component';

export function AboutPage() {
	return (
		<>
			<Welcome />
			<OutStory />
			<About />
			<OutStoryCenter />
			<Slogan />
			<Images />
			<Reviews />
			<Social />
		</>
	);
}
