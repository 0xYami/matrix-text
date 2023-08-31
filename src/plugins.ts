type Plugin = {
  repository: string;
  description: string;
};

export const plugins: Plugin[] = [
  {
    repository: "folke/lazy.nvim",
    description: "A modern plugin manager for Neovim",
  },
  {
    repository: "catppuccin/nvim",
    description: "Soothing pastel theme for (Neo)vim",
  },
  {
    repository: "nvim-telescope/telescope.nvim",
    description: "Highly extandable fuzzy finder",
  },
  {
    repository: "neovim/nvim-lspconfig",
    description: "Quickstart configurations for the Nvim LSP client",
  },
  {
    repository: "hrsh7th/nvim-cmp",
    description: "Completion plugin written in Lua",
  },
  {
    repository: "hrsh7th/cmp-nvim-lsp",
    description: "nvim-cmp source for neovim builtin LSP client",
  },
  {
    repository: "hrsh7th/cmp-buffer",
    description: "nvim-cmp source for buffer words",
  },
  {
    repository: "hrsh7th/cmp-path",
    description: "nvim-cmp source for path",
  },
  {
    repository: "hrsh7th/cmp-cmdline",
    description: "nvim-cmp source for vim's cmdline",
  },
  {
    repository: "L3MON4D3/LuaSnip",
    description: "Snippet engine written in Lua",
  },

  // {
  //   repository: "rafamadriz/friendly-snippets",
  //   description: "Set of preconfigured snippets for different languages",
  // },
  // {
  //   repository: "saadparwaiz1/cmp_luasnip",
  //   description: "luasnip completion source for nvim-cmp",
  // },
  // {
  //   repository: "echasnovski/mini.nvim",
  //   description: "Library of 30+ independent Lua modules",
  // },
  // {
  //   repository: "nvim-neo-tree/neo-tree.nvim",
  //   description:
  //     "Neovim plugin to manage the file system and other tree like structures",
  // },
  // {
  //   repository: "akinsho/bufferline.nvim",
  //   description: "A snazzy bufferline for Neovim",
  // },
  // {
  //   repository: "nvim-lualine/lualine.nvim",
  //   description: "A blazing fast and easy to configure neovim statusline",
  // },
  // {
  //   repository: "nvim-tree/nvim-web-devicons",
  //   description: "Plugin for dev icons in Neovim",
  // },
  // {
  //   repository: "kdheepak/lazygit.nvim",
  //   description: "LazyGit plugin",
  // },
  // {
  //   repository: "lewis6991/gitsigns.nvim",
  //   description: "Git integration for buffers",
  // },
  // {
  //   repository: "nvim-lua/plenary.nvim",
  //   description: "Library of Lua functions",
  // },
];
