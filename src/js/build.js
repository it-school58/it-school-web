
new Vue({
    el: '#container',
    data: {
        themesContent: null,
        linksContent: null
    },
    methods: {
        buildContent(file) {
            const path = `pages/${PATH_MODULE}/${file}.html`;

            fetch(path)
                .then(res => res.text())
                .then(body => {
                    const MyComponent = Vue.extend({
                        template: `<div>${body}</div>`
                    });
                    const component = new MyComponent().$mount();
                    const wrapper = document.getElementById('content');
                    wrapper.innerHTML = '';
                    wrapper.appendChild(component.$el);

                    setHighlightCode();
                    setActiveLink(file);
                })
        },
    },
    updated() {
        setHighlightCode();
    },
    mounted() {
        this.themesContent = ARR_MODULE;
        this.linksContent = ARR_LINKS;
    },
    created() {
        const hashPage = location.hash.slice(1);
        this.buildContent(hashPage);
	},
});


