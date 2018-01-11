import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { DNode } from '@dojo/widget-core/interfaces';
import { v, w } from '@dojo/widget-core/d';
import { ArticlePreview } from './ArticlePreview';
import { ArticleItem } from '../interfaces';
import { FeedPagination } from './FeedPagination';
import { FetchFeedPayload, FavoriteArticlePayload } from '../processes/interfaces';

export interface FeedsProperties {
	items: ArticleItem[];
	loading: boolean;
	type: string;
	tagName: string;
	username: string;
	isAuthenticated: boolean;
	total: number;
	currentPage: number;
	fetchFeed: (opts: FetchFeedPayload) => void;
	favoriteArticle: (opts: FavoriteArticlePayload) => void;
}

export class Feeds extends WidgetBase<FeedsProperties> {
	private _onGlobalFeedClick(event: MouseEvent) {
		event.preventDefault();
		const { username } = this.properties;
		this.properties.fetchFeed({ type: 'global', page: 0, filter: username });
	}

	private _onFeedClick(event: MouseEvent) {
		event.preventDefault();
		const { username } = this.properties;
		this.properties.fetchFeed({ type: 'feed', page: 0, filter: username });
	}

	private _onFavoriteFeedClick() {
		const { username } = this.properties;
		this.properties.fetchFeed({ type: 'favorites', page: 0, filter: username });
	}

	private _onUserFeedClick() {
		const { username } = this.properties;
		this.properties.fetchFeed({ type: 'user', page: 0, filter: username });
	}

	private _buildTabs(children: DNode, showPagination: boolean = true): DNode {
		const { fetchFeed, total, currentPage, isAuthenticated, type, username, tagName } = this.properties;
		const isProfile = type === 'user' || type === 'favorites';

		return v('div', { classes: 'col-md-9' }, [
			v('div', { classes: 'feed-toggle' }, [
				v('ul', { classes: ['nav', 'nav-pills', 'outline-active'] }, [
					isAuthenticated && !isProfile
						? v('li', { key: 'feeds', classes: 'nav-item' }, [
								v(
									'a',
									{
										href: '#/',
										onclick: this._onFeedClick,
										classes: ['nav-link', type === 'feed' ? 'active' : null]
									},
									['Your Feeds']
								)
							])
						: null,
					!isProfile
						? v('li', { key: 'global', classes: 'nav-item' }, [
								v(
									'a',
									{
										href: '#/',
										onclick: this._onGlobalFeedClick,
										classes: ['nav-link', type === 'global' ? 'active' : null]
									},
									['Global Feeds']
								)
							])
						: null,
					type === 'tag'
						? v('li', { key: 'tags', classes: 'nav-item' }, [
								v(
									'a',
									{
										href: '#/',
										classes: ['nav-link', 'active']
									},
									[`#${tagName}`]
								)
							])
						: null,
					isProfile
						? v('li', { key: 'articles', classes: 'nav-item' }, [
								v(
									'a',
									{
										onclick: this._onUserFeedClick,
										href: `#user/${username}`,
										classes: ['nav-link', type === 'user' ? 'active' : null]
									},
									['My Articles']
								)
							])
						: null,
					isProfile
						? v('li', { key: 'favs', classes: 'nav-item' }, [
								v(
									'a',
									{
										onclick: this._onFavoriteFeedClick,
										href: `#user/${username}/favorites`,
										classes: ['nav-link', type === 'favorites' ? 'active' : null]
									},
									['Favorited Articles']
								)
							])
						: null
				])
			]),
			children,
			showPagination ? w(FeedPagination, { fetchFeed, total, currentPage, tag: tagName, type, username }) : null
		]);
	}

	protected render() {
		const { loading = true, items, favoriteArticle } = this.properties;

		if (loading || items === undefined) {
			return this._buildTabs(v('div', { classes: 'article-preview' }, ['Loading...']), false);
		}

		if (items.length === 0) {
			return this._buildTabs(v('div', { classes: 'article-preview' }, ['No articles here, yet!']), false);
		}

		const articleList = v(
			'div',
			items.map((article, index) => {
				return w(ArticlePreview, { key: index, article, favoriteArticle });
			})
		);

		return this._buildTabs(articleList);
	}
}
