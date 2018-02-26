import glob

from bs4 import BeautifulSoup


if __name__ == '__main__':
    """ Small script to inject the header component (the top navbar) into the graphql output"""
    for filename in glob.glob('./build/reference/*'):
        if not filename.endswith('.html'):
            continue

        print "Injecting nav bar into %s" % filename

        with open(filename) as fp:
            html = BeautifulSoup(fp.read(), 'html.parser')
        body = html.find('body')

        with open('./docs/components/header.html') as fp:
            header = BeautifulSoup(fp.read(), 'html.parser')
        body.insert(0, header)
        head = html.find('head')

        stylesheet = html.new_tag('link')
        stylesheet['rel'] = 'stylesheet'
        stylesheet['href'] = "/docs/styles/website.css"
        head.insert(len(head.contents), stylesheet)

        with open(filename, 'wb') as fp:
            fp.write(html.prettify('utf-8'))
