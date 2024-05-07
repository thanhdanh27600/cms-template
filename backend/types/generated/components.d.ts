import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentContentItem extends Schema.Component {
  collectionName: 'components_content_content_items';
  info: {
    displayName: 'Content Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
    key: Attribute.String & Attribute.Required;
  };
}

export interface MediaMediaItem extends Schema.Component {
  collectionName: 'components_media_media_items';
  info: {
    displayName: 'Media Item';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    value: Attribute.Media & Attribute.Required;
    key: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 100;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.content-item': ContentContentItem;
      'media.media-item': MediaMediaItem;
    }
  }
}
