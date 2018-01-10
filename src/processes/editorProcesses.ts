import { createCommandFactory, createProcess } from '@dojo/stores/process';
import { PatchOperation } from '@dojo/stores/state/Patch';
import { replace, add, remove } from '@dojo/stores/state/operations';
import { State } from '../interfaces';

const commandFactory = createCommandFactory<State>();

const titleInputCommand = commandFactory(({ path, payload: [title] }): PatchOperation[] => {
	return [replace(path('editor', 'title'), title)];
});

const descriptionInputCommand = commandFactory(({ path, payload: [description] }): PatchOperation[] => {
	return [replace(path('editor', 'description'), description)];
});

const contentInputCommand = commandFactory(({ path, payload: [content] }): PatchOperation[] => {
	return [replace(path('editor', 'body'), content)];
});

const tagInputCommand = commandFactory(({ path, payload: [tag] }): PatchOperation[] => {
	return [replace(path('editor', 'tag'), tag)];
});

const addTagCommand = commandFactory(({ get, at, path, payload: [tag] }): PatchOperation[] => {
	const length = (get(path('editor', 'tagList')) || []).length;
	return [add(at(path('editor', 'tagList'), length), tag)];
});

const clearTagInputCommand = commandFactory(({ path }) => {
	return [replace(path('editor', 'tag'), '')];
});

const removeTagCommand = commandFactory(({ get, at, path, payload: [tag] }): PatchOperation[] => {
	const tags = get(path('editor', 'tagList'));
	const index = tags.indexOf(tag);
	if (index !== -1) {
		return [remove(at(path('editor', 'tagList'), index))];
	}
	return [];
});

const getArticleForEditorCommand = commandFactory(async ({ get, at, path, payload: [slug] }) => {
	const response = await fetch(`https://conduit.productionready.io//api/articles/${slug}`);
	const json = await response.json();
	return [replace(path('editor'), json.article)];
});

const startPublishCommand = commandFactory(({ path }) => {
	return [replace(path('editor', 'loading'), true)];
});

const publishArticleCommand = commandFactory(async ({ get, path, payload }): Promise<PatchOperation[]> => {
	const token = get(path('user', 'token'));
	const slug = get(path('editor', 'slug'));
	const requestPayload = {
		article: {
			title: get(path('editor', 'title')) || '',
			description: get(path('editor', 'description')) || '',
			body: get(path('editor', 'body')) || '',
			tagList: get(path('editor', 'tagList')) || []
		}
	};

	const headers = new Headers({
		'Content-Type': 'application/json',
		Authorization: `Token ${token}`
	});
	const url = slug
		? `https://conduit.productionready.io/api/articles/${slug}`
		: 'https://conduit.productionready.io/api/articles';
	const response = await fetch(url, {
		method: slug ? 'put' : 'post',
		headers,
		body: JSON.stringify(requestPayload)
	});
	const json = await response.json();

	if (!response.ok) {
		return [replace(path('editor', 'loading'), false), replace(path('errors'), json.errors)];
	}

	return [
		replace(path('article', 'item'), json.article),
		replace(path('article', 'loaded'), true),
		replace(path('editor'), undefined),
		replace(path('routing', 'outlet'), 'article'),
		replace(path('routing', 'params'), { slug: json.article.slug })
	];
});

export const titleInput = createProcess([titleInputCommand]);
export const descInput = createProcess([descriptionInputCommand]);
export const contentInput = createProcess([contentInputCommand]);
export const tagInput = createProcess([tagInputCommand]);
export const addTag = createProcess([addTagCommand, clearTagInputCommand]);
export const removeTag = createProcess([removeTagCommand]);
export const getArticleForEditor = createProcess([getArticleForEditorCommand]);
export const publishArticle = createProcess([startPublishCommand, publishArticleCommand]);