import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { Link } from '@dojo/routing/Link';
import * as marked from 'marked';

import { Comment } from './Comment';
import { ArticleItem, Comment as CommentItem, AuthorProfile } from '../interfaces';
import { ArticleMeta } from './ArticleMeta';

export interface ArticleProperties {
	article: ArticleItem;
	authorProfile: AuthorProfile;
	comments: CommentItem[];
	loaded: boolean;
	isAuthenticated: boolean;
	loggedInUser: string;
	addComment: any;
	deleteComment: any;
	onNewCommentInput: any;
	newComment: string;
	slug: string;
	getArticle: Function;
	favoriteArticle: Function;
	followUser: Function;
	deleteArticle: Function;
	username: string;
}

export class Article extends WidgetBase<ArticleProperties> {
	private _addComment(event: any) {
		event.preventDefault();
		if (this.properties.article) {
			this.properties.addComment(this.properties.article.slug, this.properties.newComment);
		}
	}

	private _onNewCommentInput(event: any) {
		this.properties.onNewCommentInput(event.target.value);
	}

	onAttach() {
		this.properties.getArticle(this.properties.slug);
	}

	protected render() {
		const {
			username,
			deleteArticle,
			followUser,
			favoriteArticle,
			isAuthenticated,
			newComment,
			deleteComment,
			comments,
			loaded,
			loggedInUser,
			article
		} = this.properties;

		if (!loaded) {
			return v('div', { classes: 'article-page' }, [v('div', { key: 'banner', classes: 'banner' })]);
		}

		const { createdAt, slug, favorited, favoritesCount, author: authorProfile } = article;

		return v('div', { classes: 'article-page' }, [
			v('div', { key: 'banner', classes: 'banner' }, [
				v('div', { classes: 'container' }, [
					v('h1', [article.title]),
					isAuthenticated
						? w(ArticleMeta, {
								authorProfile,
								slug,
								createdAt,
								favoriteArticle,
								followUser,
								deleteArticle,
								username,
								favorited,
								favoritesCount
							})
						: null
				])
			]),
			v('div', { key: 'page', classes: ['container', 'page'] }, [
				v('div', { classes: ['row', 'article-content'] }, [
					v('div', { classes: 'col-xs-12' }, [
						v('div', { innerHTML: marked(article.body, { sanitize: true }) }),
						v(
							'ul',
							{ classes: 'tag-list' },
							article.tagList.map((tag: string) => {
								return v('li', { classes: ['tag-default', 'tag-pill', 'tag-outline'] }, [tag]);
							})
						)
					])
				]),
				v('hr'),
				v('div', { classes: 'article-actions' }, [
					isAuthenticated
						? w(ArticleMeta, {
								authorProfile,
								slug,
								createdAt,
								favoriteArticle,
								followUser,
								deleteArticle,
								username,
								favorited,
								favoritesCount
							})
						: null
				]),
				v('div', { classes: 'row' }, [
					v('div', { classes: ['col-xs-12', 'col-md-8', 'offset-md-2'] }, [
						isAuthenticated
							? v('form', { classes: ['card', 'comment-form'] }, [
									v('div', { classes: 'card-block' }, [
										v('textarea', {
											value: newComment,
											oninput: this._onNewCommentInput,
											classes: 'form-control',
											placeholder: 'Write a comment...',
											rows: 3
										})
									]),
									v('div', { classes: 'card-footer' }, [
										v('img', { classes: 'comment-author-img', src: '' }),
										v(
											'button',
											{ onclick: this._addComment, classes: ['btn', 'btn-sm', 'btn-primary'] },
											['Post Comment']
										)
									])
								])
							: v('p', [
									w(Link, { to: 'login' }, ['Sign In']),
									' or ',
									w(Link, { to: 'register' }, ['Sign Up']),
									' to add comments on this article.'
								]),
						v(
							'div',
							comments.map((comment: any, index: number) => {
								return w(Comment, {
									key: index,
									comment,
									loggedInUser,
									deleteComment,
									slug: article.slug
								});
							})
						)
					])
				])
			])
		]);
	}
}
