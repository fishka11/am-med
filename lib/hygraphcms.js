async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.HYGRAPH_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.HYGRAPH_DEV_AUTH_TOKEN
          : process.env.HYGRAPH_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getHomeContent(preview) {
  const data = await fetchAPI(
    `
query getHomeContent {
  homes {
    text {
      html
      markdown
      raw
      text
    }
    id
    seo {
      seoTitle
      seoDescription
      url
    }
    headerPicture {
      id
      altText
      verticalShift
      picture {
        fileName
        handle
        height
        id
        mimeType
        size
        url
        width
      }
    }
    headerText {
      html
      markdown
      raw
      text
    }
    button {
      buttonUrl
      buttonText
      id
    }
  }
  firmDatas {
    email
    phone
    id
  }
}

`,
    { preview }
  );
  return { ...data };
}

export async function getAboutUsContent(preview) {
  const data = await fetchAPI(
    `
query getAboutUsContent {
  firmDatas {
    email
    phone
    id
  }
  aboutuses {
    id
    seo {
      seoTitle
      url
      seoDescription
    }
    title
    text {
      html
      markdown
      raw
      text
    }
    headerPicture {
      id
      verticalShift
      picture {
        fileName
        handle
        height
        id
        mimeType
        size
        url
        width
      }
    }
  }
}
`,
    { preview }
  );
  return { ...data };
}

export async function getOfferContent(preview) {
  const data = await fetchAPI(
    `
query getOfferContentet {
  firmDatas {
    email
    phone
    id
  }
  offers {
    text2 {
      html
      markdown
      raw
      text
    }
    text1 {
      html
      markdown
      raw
      text
    }
    seo {
      stage
      url
      seoTitle
      seoDescription
    }
    id
    title
    headerPicture {
      id
      verticalShift
      picture {
        fileName
        handle
        height
        id
        mimeType
        size
        url
        width
      }
    }
  }
  offerCards {
    id
    title
    text {
      html
      markdown
      raw
      text
    }
    picture {
      fileName
      handle
      height
      mimeType
      size
      stage
      url
      width
      id
    }
  }
}
`,
    { preview }
  );
  return { ...data };
}

export async function getCodeContent(preview) {
  const data = await fetchAPI(
    `
query getCodeContent {
  firmDatas {
    email
    phone
    id
  }
  codes {
    headerPicture {
      id
      verticalShift
      picture {
        fileName
        handle
        height
        id
        mimeType
        size
        url
        width
      }
    }
    subtitle
    text {
      html
      markdown
      raw
      text
    }
    title
    seo {
      seoTitle
      url
      seoDescription
    }
  }
}
`,
    { preview }
  );
  return { ...data };
}

export async function getContactContent(preview) {
  const data = await fetchAPI(
    `
query getContactContent {
  firmDatas {
    email
    phone
    id
  }
  contacts {
    bdo
    id
    nip
    regon
    seo {
      id
      seoTitle
      url
      seoDescription
    }
    subtitle
    title
    headerPicture {
      id
      verticalShift
      picture {
        fileName
        handle
        height
        mimeType
        size
        url
        width
      }
    }
  }
  contactCards {
    text {
      html
      markdown
      raw
      text
    }
    title
    fontAwesomeIcon
    id
  }
}
`,
    { preview }
  );
  return { ...data };
}
