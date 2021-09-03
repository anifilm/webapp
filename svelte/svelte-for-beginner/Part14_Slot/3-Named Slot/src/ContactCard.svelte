<article class="contact-card">
  <h2>
    <slot name="name">
      <span class="missing">Unknown name</span>
    </slot>
  </h2>

  <div class="address">
    <slot name="address">
      <span class="missing">Unknown address</span>
    </slot>
  </div>

  <br />
  <div class="email">
    <slot name="email">
      <span class="missing">Unknown email</span>
    </slot>
  </div>
</article>
